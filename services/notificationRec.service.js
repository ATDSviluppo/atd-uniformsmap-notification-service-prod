"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var NotificationRecService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRecService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const NotificationToken_service_1 = require("../entities/NotificationToken/NotificationToken.service");
const NotificationToSend_1 = require("../entities/NotificationToSend/NotificationToSend");
const NotificationToSend_service_1 = require("../entities/NotificationToSend/NotificationToSend.service");
const NotificationType_service_1 = require("../entities/NotificationType/NotificationType.service");
const NotificationRec_1 = require("../entities/SgNotificationRec/NotificationRec");
const Translate_service_1 = require("../entities/Translate/Translate.service");
const SgDipsositivo_service_1 = require("../entities/Stargate/SgDispositivo/SgDipsositivo.service");
const typeorm_2 = require("typeorm");
const firebase_1 = require("../firebase");
let NotificationRecService = NotificationRecService_1 = class NotificationRecService {
    constructor(repo, notificationTypeService, notificationToSendService, notificationTokenService, translateService, dispositivoService) {
        this.repo = repo;
        this.notificationTypeService = notificationTypeService;
        this.notificationToSendService = notificationToSendService;
        this.notificationTokenService = notificationTokenService;
        this.translateService = translateService;
        this.dispositivoService = dispositivoService;
        this.processing = false;
        this.processingToSend = false;
        this.logger = new common_1.Logger(NotificationRecService_1.name);
    }
    async processNotifications() {
        if (this.processing)
            return;
        this.processing = true;
        try {
            const notifications = await this.repo.find({
                take: 50,
                order: { id: 'ASC' },
            });
            if (notifications.length === 0)
                return;
            this.logger.debug(`Processing ${notifications.length} notifications`);
            for (const n of notifications) {
                const body = n.body;
                try {
                    switch (n?.type) {
                        case 'E':
                            await this.handlePhxEvent(body);
                            break;
                        case 'L':
                            await this.handlePhxLog(body);
                            break;
                        default:
                            this.logger.warn(`Record sconosciuto: ${JSON.stringify(n)}`);
                    }
                    await this.repo.delete(n.id);
                }
                catch (err) {
                    this.logger.error(`Errore nel processing record ${n.id}`, err);
                }
            }
        }
        finally {
            this.processing = false;
        }
    }
    async handlePhxEvent(body) {
        let saved = 0;
        let tot = 0;
        this.logger.debug(`Handle Events: ${JSON.stringify(body)}`);
        const eventObj = {
            idEvent: body.id_event,
            note1: body.note1,
            note2: body.note2,
            location: body.location,
            tstamp: body.timestamp,
            id_ditta: body.id_ditta,
        };
        const notificationTypes = await this.notificationTypeService.findForEvent(eventObj.note1, eventObj.note2, eventObj.location);
        this.logger.debug(`Types for notification : ${notificationTypes?.length ?? 0}`);
        if (!notificationTypes?.length)
            return;
        for (const nt of notificationTypes) {
            const employees = nt.employeeNotifications ?? [];
            for (const emp of employees) {
                const [employee] = await this.phxEmployeeService.findByFilters({ idEmployee: emp.employeeId.toString() });
                if (!employee || employee.idDitta != eventObj.id_ditta) {
                    this.logger.warn(`Skip: employee ${emp.idEmployeeNotification} not found for ditta ${eventObj.id_ditta}`);
                    continue;
                }
                if (!['S', 'Y'].includes((emp.sn_attivo ?? '').trim().toUpperCase()))
                    continue;
                if (!this.isWithinSchedule(nt.startTime, nt.endTime)) {
                    this.logger.debug(`Skip: out of schedule window for employee ${emp.idEmployeeNotification}`);
                    continue;
                }
                tot++;
                const notification = new NotificationToSend_1.NotificationToSendClass();
                notification.employeeNotification = emp;
                notification.eventId = eventObj.idEvent;
                notification.logId = null;
                notification.whenlog = new Date().toISOString();
                notification.sent = false;
                const lastNotification = await this.notificationToSendService.getLastNotification(emp.idEmployeeNotification, eventObj.idEvent);
                if (!lastNotification || this.isTimeoutExpired(lastNotification.whenlog, nt.timeout)) {
                    await this.notificationToSendService.create(notification);
                    saved++;
                }
                else {
                    this.logger.debug(`Skip: timeout not expired for employee ${emp.idEmployeeNotification}`);
                }
            }
        }
        this.logger.debug(`Saved ${saved} out of ${tot}`);
    }
    async handlePhxLog(body) {
        let saved = 0;
        let tot = 0;
        this.logger.debug(`Handle Logs: ${JSON.stringify(body)}`);
        const logObj = {
            idLog: body.id_log,
            type: body.type,
            timestamp: new Date(body.timestamp),
            id_ditta: body.id_ditta,
        };
        const notificationTypes = await this.notificationTypeService.findForLogs(logObj.type);
        this.logger.debug(`Types for notification: ${notificationTypes?.length ?? 0}`);
        if (!notificationTypes?.length)
            return;
        for (const nt of notificationTypes) {
            const employees = nt.employeeNotifications ?? [];
            for (const emp of employees) {
                const [employee] = await this.phxEmployeeService.findByFilters({ idEmployee: emp.employeeId.toString() });
                if (!employee || employee.idDitta != logObj.id_ditta) {
                    this.logger.warn(`Skip: employee ${emp.idEmployeeNotification} not found for ditta ${logObj.id_ditta}`);
                    continue;
                }
                if (!['S', 'Y'].includes((emp.sn_attivo ?? '').trim().toUpperCase()))
                    continue;
                if (!this.isWithinSchedule(nt.startTime, nt.endTime)) {
                    this.logger.debug(`Skip: out of schedule window for employee ${emp.idEmployeeNotification}`);
                    continue;
                }
                tot++;
                const notification = new NotificationToSend_1.NotificationToSendClass();
                notification.employeeNotification = emp;
                notification.eventId = null;
                notification.logId = logObj.idLog;
                notification.whenlog = new Date().toISOString();
                notification.sent = false;
                const lastNotification = await this.notificationToSendService.getLastNotification(emp.idEmployeeNotification, null, logObj.idLog);
                if (!lastNotification || this.isTimeoutExpired(lastNotification.whenlog, nt.timeout)) {
                    await this.notificationToSendService.create(notification);
                    saved++;
                }
                else {
                    this.logger.debug(`Skip: timeout not expired for employee ${emp.idEmployeeNotification}`);
                }
            }
        }
        this.logger.debug(`Saved ${saved} out of ${tot}`);
    }
    async checkToSend() {
        if (this.processingToSend)
            return;
        this.processingToSend = true;
        try {
            const notifications = await this.notificationToSendService.findToSend();
            this.logger.debug(`Send ${notifications.length} notifications`);
            for (const n of notifications) {
                let employee = n.employeeNotification.employeeId;
                let token = await this.getTokenSG(n.employeeNotification.employeeId);
                if (token.length == 0) {
                    this.logger.error(`No token for employee ${n.employeeNotification.employeeId}`);
                    n.sent = true;
                    await this.notificationToSendService.update(n.idNotificationToSend, n);
                    continue;
                }
                const type = await this.notificationTypeService.findOne(n.employeeNotification.idNotificationType);
                const trad = await this.translateService.findByType(type.idNotificationType);
                let msg = null;
                for (const lang of trad)
                    if (lang.language.toLowerCase() == process.env.NOTIFICATION_LANG.toLowerCase())
                        msg = lang.translation;
                if (!msg) {
                    this.logger.error(`Translate for type ${n.employeeNotification.idNotificationType} and lang ${process.env.NOTIFICATION_LANG}`);
                    continue;
                }
                let deviceInfo = null;
                if (type.idDispSg) {
                    deviceInfo = await this.dispositivoService.getDeviceInfo(type.idDispSg);
                }
                msg = this.generateMsg(msg, type);
                if (deviceInfo)
                    msg = msg + "\n" + deviceInfo?.desStabilimento + " - " + deviceInfo?.desIsola + " - " + deviceInfo?.desDispositivo;
                await this.sendNotification(type.notificationClass.description, msg, token, deviceInfo);
                n.sent = true;
                await this.notificationToSendService.update(n.idNotificationToSend, n);
            }
        }
        catch (e) {
            this.logger.error(e);
        }
        finally {
            this.processingToSend = false;
        }
    }
    async getTokenSG(idEmployee) {
        const rows = await this.notificationTokenService.findByEmployee(idEmployee);
        return rows.map(r => r.token);
    }
    generateMsg(msg, n) {
        return msg.replace(/\$\{([^}]+)\}/g, (_, key) => {
            return (n[key] ??
                '');
        });
    }
    async sendNotification(title, body, tokens, deviceInfo) {
        if (!tokens || tokens.length === 0)
            return;
        const message = {
            tokens,
            notification: { title, body },
            data: {
                url: '/',
                codDispositivo: deviceInfo?.codDispositivo ?? '',
                desDispositivo: deviceInfo?.desDispositivo ?? '',
                desIsola: deviceInfo?.desIsola ?? '',
                desStabilimento: deviceInfo?.desStabilimento ?? '',
            },
        };
        const dryRun = process.env.FIREBASE_DRYRUN === 'S';
        try {
            const sendResult = await firebase_1.admin.messaging().sendEachForMulticast(message, dryRun);
            console.log(`Invio notifiche: successi ${sendResult.successCount}, fallimenti ${sendResult.failureCount}`);
            sendResult.responses.forEach((r, i) => {
                if (!r.success)
                    console.error(`Token fallito: ${tokens[i]}, errore: ${r.error}`);
            });
            return sendResult;
        }
        catch (error) {
            console.error('Errore invio notifiche:', error);
            throw error;
        }
    }
    isWithinSchedule(startTime, endTime) {
        if (startTime == null || endTime == null)
            return true;
        if (startTime === 0 && endTime === 0)
            return true;
        const now = new Date();
        const currentHHMM = now.getHours() * 100 + now.getMinutes();
        if (startTime <= 2400 && endTime <= 2400) {
            if (startTime <= endTime) {
                return currentHHMM >= startTime && currentHHMM <= endTime;
            }
            else {
                return currentHHMM >= startTime || currentHHMM <= endTime;
            }
        }
        return true;
    }
    isTimeoutExpired(lastWhen, timeoutMinutes) {
        const lastTime = new Date(lastWhen).getTime();
        const now = Date.now();
        return (now - lastTime) >= timeoutMinutes * 60 * 1000;
    }
    async cleanupOldSentNotifications() {
        try {
            const dateLimit = new Date();
            dateLimit.setDate(dateLimit.getDate() - 7);
            const result = await this.notificationToSendService.cleanTable(dateLimit);
            this.logger.debug(`Cleanup notifiche record cancellati`);
        }
        catch (error) {
            this.logger.error('Errore durante il cleanup delle notifiche:', error);
        }
    }
};
exports.NotificationRecService = NotificationRecService;
__decorate([
    (0, schedule_1.Interval)(2000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationRecService.prototype, "processNotifications", null);
__decorate([
    (0, schedule_1.Interval)(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationRecService.prototype, "checkToSend", null);
__decorate([
    (0, schedule_1.Interval)(24 * 60 * 60 * 1000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationRecService.prototype, "cleanupOldSentNotifications", null);
exports.NotificationRecService = NotificationRecService = NotificationRecService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(NotificationRec_1.NotificationRec, 'sg')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        NotificationType_service_1.NotificationTypeService,
        NotificationToSend_service_1.NotificationToSendService,
        NotificationToken_service_1.NotificationTokenService,
        Translate_service_1.TranslateService,
        SgDipsositivo_service_1.DispositivoService])
], NotificationRecService);
//# sourceMappingURL=notificationRec.service.js.map
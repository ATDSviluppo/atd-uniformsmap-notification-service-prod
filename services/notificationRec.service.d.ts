import { NotificationTokenService } from "src/entities/NotificationToken/NotificationToken.service";
import { NotificationToSendService } from "src/entities/NotificationToSend/NotificationToSend.service";
import { NotificationTypeService } from "src/entities/NotificationType/NotificationType.service";
import { NotificationRec } from "src/entities/SgNotificationRec/NotificationRec";
import { TranslateService } from "src/entities/Translate/Translate.service";
import { Repository } from "typeorm";
export declare class NotificationRecService {
    private readonly repo;
    private readonly notificationTypeService;
    private readonly notificationToSendService;
    private readonly notificationTokenService;
    private readonly translateService;
    private processing;
    private processingToSend;
    private readonly logger;
    constructor(repo: Repository<NotificationRec>, notificationTypeService: NotificationTypeService, notificationToSendService: NotificationToSendService, notificationTokenService: NotificationTokenService, translateService: TranslateService);
    processNotifications(): Promise<void>;
    private handlePhxEvent;
    private handlePhxLog;
    private checkToSend;
    private getTokenSG;
    private generateMsg;
    private sendNotification;
    private isWithinSchedule;
    private isTimeoutExpired;
    cleanupOldSentNotifications(): Promise<void>;
}

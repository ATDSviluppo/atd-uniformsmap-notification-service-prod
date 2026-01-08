"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const entities_module_1 = require("../entities/entities.module");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("../controllers/app.controller");
const auth_module_1 = require("../auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const dotenv = require("dotenv");
const NotificationClass_module_1 = require("../entities/NotificationClass/NotificationClass.module");
const NotificationToSend_module_1 = require("../entities/NotificationToSend/NotificationToSend.module");
const NotificationType_module_1 = require("../entities/NotificationType/NotificationType.module");
const EmployeeNotification_module_1 = require("../entities/EmployeeNotification/EmployeeNotification.module");
const NotificationClass_service_1 = require("../entities/NotificationClass/NotificationClass.service");
const EmployeeNotification_service_1 = require("../entities/EmployeeNotification/EmployeeNotification.service");
const NotificationToSend_service_1 = require("../entities/NotificationToSend/NotificationToSend.service");
const NotificationType_service_1 = require("../entities/NotificationType/NotificationType.service");
const notificationClass_controller_1 = require("../controllers/notificationClass.controller");
const employeeNotification_controller_1 = require("../controllers/employeeNotification.controller");
const notificationType_controller_1 = require("../controllers/notificationType.controller");
const notificationToSend_controller_1 = require("../controllers/notificationToSend.controller");
const LoggingMiddleware_1 = require("../middleware/LoggingMiddleware");
const schedule_1 = require("@nestjs/schedule");
const NotificationRec_module_1 = require("../entities/SgNotificationRec/NotificationRec.module");
const Translate_module_1 = require("../entities/Translate/Translate.module");
const translate_controller_1 = require("../controllers/translate.controller");
const Translate_service_1 = require("../entities/Translate/Translate.service");
const NotificationToken_module_1 = require("../entities/NotificationToken/NotificationToken.module");
const sgTipoDispositivo_controller_1 = require("../controllers/sgTipoDispositivo.controller");
const sgDispositivo_module_1 = require("../entities/Stargate/SgDispositivo/sgDispositivo.module");
const SgTipoDispositivo_module_1 = require("../entities/Stargate/SgTipoDispositivo/SgTipoDispositivo.module");
const PhxEmployee_module_1 = require("../entities/Stargate/PhxEmployee/PhxEmployee.module");
const phxController_controller_1 = require("../controllers/phxController.controller");
dotenv.config();
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(LoggingMiddleware_1.LoggingMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([...entities_module_1.entities]),
            axios_1.HttpModule,
            auth_module_1.AuthModule,
            NotificationClass_module_1.NotificationClassModule,
            NotificationToSend_module_1.NotificationToSendModule,
            NotificationType_module_1.NotificationTypeModule,
            EmployeeNotification_module_1.EmployeeNotificationModule,
            NotificationRec_module_1.NotificationRecModule,
            Translate_module_1.TranslateModule,
            NotificationToken_module_1.NotificationTokenModule,
            sgDispositivo_module_1.SgDispositivoModule,
            SgTipoDispositivo_module_1.SgTipoDispositivoModule,
            PhxEmployee_module_1.PhxEmployeeModule,
            typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'mysql',
                host: process.env.DATABASE_HOST,
                port: +process.env.DATABASE_PORT,
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASSWORD,
                database: process.env.DATABASE_NAME,
                entities: [...entities_module_1.entities],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                name: 'sg',
                type: 'mysql',
                host: process.env.SG_DATABASE_HOST,
                port: +process.env.SG_DATABASE_PORT,
                username: process.env.SG_DATABASE_USERNAME,
                password: process.env.SG_DATABASE_PASSWORD,
                database: process.env.SG_DATABASE_NAME,
                entities: [...entities_module_1.sgEntities],
                synchronize: true,
            }),
        ],
        controllers: [
            app_controller_1.AppController,
            notificationClass_controller_1.NotificationClassController,
            employeeNotification_controller_1.EmployeeNotificationController,
            notificationType_controller_1.NotificationTypeController,
            notificationToSend_controller_1.NotificationToSendController,
            translate_controller_1.TranslateController,
            sgTipoDispositivo_controller_1.SgTipoDispositivoController,
            sgTipoDispositivo_controller_1.SgTipoDispositivoController,
            phxController_controller_1.PhxEmployeeController,
        ],
        providers: [
            NotificationClass_service_1.NotificationClassService,
            EmployeeNotification_service_1.EmployeeNotificationService,
            NotificationToSend_service_1.NotificationToSendService,
            NotificationType_service_1.NotificationTypeService,
            Translate_service_1.TranslateService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sgEntities = exports.entities = void 0;
const Employeenotification_1 = require("./EmployeeNotification/Employeenotification");
const NotificationClass_1 = require("./NotificationClass/NotificationClass");
const NotificationToken_1 = require("./NotificationToken/NotificationToken");
const NotificationToSend_1 = require("./NotificationToSend/NotificationToSend");
const NotificationType_1 = require("./NotificationType/NotificationType");
const NotificationRec_1 = require("./SgNotificationRec/NotificationRec");
const ditta_1 = require("./Stargate/Ditta/ditta");
const PhxEmployee_1 = require("./Stargate/PhxEmployee/PhxEmployee");
const SgDispositivo_1 = require("./Stargate/SgDispositivo/SgDispositivo");
const SgTipoDispositivo_1 = require("./Stargate/SgTipoDispositivo/SgTipoDispositivo");
const Translate_1 = require("./Translate/Translate");
exports.entities = [
    Employeenotification_1.EmployeeNotificationClass,
    NotificationClass_1.NotificationClass,
    NotificationToSend_1.NotificationToSendClass,
    NotificationType_1.NotificationTypeClass,
    Translate_1.TranslateClass
];
exports.sgEntities = [
    NotificationRec_1.NotificationRec,
    NotificationToken_1.NotificationToken,
    SgDispositivo_1.SgDispositivo,
    SgTipoDispositivo_1.SgTipoDispositivo,
    PhxEmployee_1.PhxEmployee,
    ditta_1.Ditta,
];
//# sourceMappingURL=entities.module.js.map
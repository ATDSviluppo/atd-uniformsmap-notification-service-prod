"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhxEmployeeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const phxController_controller_1 = require("../../../controllers/phxController.controller");
const PhxEmployee_service_1 = require("./PhxEmployee.service");
const PhxEmployee_1 = require("./PhxEmployee");
let PhxEmployeeModule = class PhxEmployeeModule {
};
exports.PhxEmployeeModule = PhxEmployeeModule;
exports.PhxEmployeeModule = PhxEmployeeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([PhxEmployee_1.PhxEmployee], 'sg'),
        ],
        controllers: [phxController_controller_1.PhxEmployeeController],
        providers: [PhxEmployee_service_1.PhxEmployeeService],
        exports: [PhxEmployee_service_1.PhxEmployeeService],
    })
], PhxEmployeeModule);
//# sourceMappingURL=PhxEmployee.module.js.map
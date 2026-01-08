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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_custom_1 = require("passport-custom");
const google_auth_library_1 = require("google-auth-library");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_custom_1.Strategy, 'custom') {
    constructor() {
        super();
    }
    async validate(request) {
        console.log('Inizio verifica utente.');
        const authHeader = request.headers.authorization;
        const token = authHeader?.substring('Bearer '.length);
        const userID = process.env.GOOGLE_JWT_USER_ID;
        let usersIDs = [];
        if (userID.includes(",")) {
            usersIDs = process.env.GOOGLE_JWT_USER_ID.split(",");
        }
        if (!token) {
            console.log("Utente non autorizzato!");
            throw new common_1.UnauthorizedException();
        }
        console.log("Token esistente.");
        const client = new google_auth_library_1.OAuth2Client();
        try {
            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: process.env.GOOGLE_JWT_AUDIENCE,
            });
            const payload = ticket.getPayload();
            const userid = payload?.sub;
            let isUnauthorized = true;
            if (userid === userID) {
                isUnauthorized = false;
            }
            if (usersIDs.length > 1) {
                usersIDs.forEach(function (id) {
                    if (userid === id) {
                        isUnauthorized = false;
                    }
                });
            }
            if (isUnauthorized) {
                console.log("Utente non autorizzato!");
                throw new common_1.UnauthorizedException();
            }
            console.log("Token corretto. Utente autorizzato.");
            return payload;
        }
        catch (error) {
            console.log("Utente non autorizzato!");
            throw new common_1.UnauthorizedException();
        }
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GoogleStrategy);
//# sourceMappingURL=google-jwt.strategy.js.map
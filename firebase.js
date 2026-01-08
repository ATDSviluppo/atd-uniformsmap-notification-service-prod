"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
const admin = require("firebase-admin");
exports.admin = admin;
const dotenv = require("dotenv");
dotenv.config();
console.log('Loading credentials for firebase at: ', process.env.GOOGLE_APPLICATION_CREDENTIALS);
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
    });
}
//# sourceMappingURL=firebase.js.map
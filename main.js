"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const dotenv = require("dotenv");
const swagger_1 = require("@nestjs/swagger");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = process.env.SERVER_PORT;
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Notification Service')
        .setDescription('Documentazione API per le notifiche')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port, '0.0.0.0');
    console.log('App listening on port ' + port);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
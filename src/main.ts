import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';


async function bootstrap() {
  const application = await NestFactory.create<NestExpressApplication>(AppModule);
  application.setBaseViewsDir(join(__dirname, "..", "views"));
  application.useStaticAssets(join(__dirname, "..", "public"));
  application.setViewEngine("ejs");

  await application.listen(3000, function () {
    console.log("App Started On Port 3000")
  })
}
bootstrap();

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // const globalPrefix = 'api';
  const globalPrefix = '';
  // app.setGlobalPrefix(globalPrefix);
  console.log('dirname: ', __dirname);

  // app.useStaticAssets('public');
  app.useStaticAssets(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();

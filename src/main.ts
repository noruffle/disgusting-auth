import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function appUp() {
  const app = await NestFactory.create(AppModule)
  app.listen(process.env.PORT)
}

appUp()
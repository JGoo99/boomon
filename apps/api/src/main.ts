import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const server = express();
let isInitialized = false;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  const config = new DocumentBuilder()
    .setTitle('BOOMON')
    .setDescription('The Band rehearsal AI management Application API')
    .setVersion('1.0')
    .addTag('band')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.init();
  isInitialized = true;
}

// export default handler for Vercel
export default async function handler(req: any, res: any) {
  if (!isInitialized) {
    await bootstrap();
  }
  return server(req, res);
}

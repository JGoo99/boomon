import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server = express();
let isInitialized = false;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

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

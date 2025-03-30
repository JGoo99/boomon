import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import { SuccessResponseInterceptor } from './common/interceptors/success-response-interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ExpressAdapter } from '@nestjs/platform-express';

let isInitialized = false;
const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new SuccessResponseInterceptor());

  await app.init();
  isInitialized = true;
}

// export default handler for Vercel
export default async function handler(req: any, res: any) {
  if (!isInitialized) {
    await bootstrap();
  }

  if (req.url.startsWith('/api')) {
    req.url = req.url.replace(/^\/api/, '') || '/';
  }  

  return server(req, res);
}

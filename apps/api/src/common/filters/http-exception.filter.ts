import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const statusCode = exception.getStatus();
    const errorResponse = exception.getResponse() as
      | string
      | { error: string; message: string | string[]; statusCode: number };

    let message: string | string[];
    if (typeof errorResponse === 'string') {
      message = errorResponse;
    } else if (
      typeof errorResponse === 'object' &&
      'message' in errorResponse
    ) {
      message = errorResponse.message;
    } else {
      message = 'An unexpected error occurred';
    }

    response.status(statusCode).json({
      success: false,
      statusCode,
      message,
      timeStamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
    });
  }
}

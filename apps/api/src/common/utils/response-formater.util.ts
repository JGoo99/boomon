import { SuccessResponse } from '../model/success.response.interface';
import { ErrorResponse } from '../model/errorResponse.interface';
import { Request } from 'express';

export function formatSuccessResponse<T>(
  statusCode: number,
  data: T,
): SuccessResponse<T> {
  return {
    success: true,
    statusCode,
    data,
  };
}

export function formatErrorResponse(
  exception: any,
  request: Request,
): ErrorResponse {
  const statusCode = exception.getStatus() ? exception.getStatus() : 500;
  const errorResponse = exception.getResponse()
    ? exception.getResponse()
    : 'Internal Server Error';

  const message =
    typeof errorResponse === 'string' ? errorResponse : errorResponse.message;

  return {
    success: false,
    statusCode,
    message,
    timeStamp: new Date().toISOString(),
    path: request?.url,
    method: request?.method,
  };
}

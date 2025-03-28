import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { formatSuccessResponse } from '../utils/response-formater.util';
import { SuccessResponse } from '../model/success.response.interface';

@Injectable()
export class SuccessResponseInterceptor<T>
  implements NestInterceptor<T, SuccessResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<SuccessResponse<T>> {
    const response = context.switchToHttp().getResponse();

    return next
      .handle()
      .pipe(map((data) => formatSuccessResponse(response.statusCode, data)));
  }
}

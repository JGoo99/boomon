import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class Response<T> {
  success: boolean;
  statusCode: number;
  data: T;
}

@Injectable()
export class SuccessResponseInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    const response = context.switchToHttp().getResponse();

    return next.handle().pipe(
      map((data) => {
        return {
          success: true,
          statusCode: response.statusCode,
          data,
        };
      }),
    );
  }
}

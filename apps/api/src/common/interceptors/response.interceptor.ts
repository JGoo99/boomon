import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> | Promise<Observable<Response<T>>> {
    console.log(context.switchToHttp());

    return next.handle().pipe(
      map((data) => ({
        code: context.switchToHttp().getResponse().statusCode,
        message: 'ok',
        data,
      })),
    );
  }
}

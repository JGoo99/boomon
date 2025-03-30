import { Controller, Get } from '@nestjs/common';
import { DynamoDBHealthService } from './health.dynamodb';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';

@Controller('api/health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly db: DynamoDBHealthService
  ) {}

  @Get()
  @HealthCheck()
  async check() {
    return await this.health.check([
      () => this.http.pingCheck('nestjs-docs', 'https://docs.nestjs.com'),
      () => this.http.pingCheck('cloudfront', process.env.CLOUDFRONT_URL+'/test/boomon_logo.png'),
      () => this.db.checkDynamoDBHealth('dynamodb'),
    ]);
  }
}

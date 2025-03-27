import { Injectable } from '@nestjs/common';
import { DynamoDBClient, ListTablesCommand } from '@aws-sdk/client-dynamodb';
import { HealthIndicatorResult } from '@nestjs/terminus';

@Injectable()
export class DynamoDBHealthService {
  private readonly client = new DynamoDBClient({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

  async checkDynamoDBHealth(key = 'dynamodb'): Promise<HealthIndicatorResult> {
    const result: HealthIndicatorResult = {
      [key]: {
        status: 'up',
      },
    };

    try {
      await this.client.send(new ListTablesCommand({ Limit: 1 }));
      return result;
    } catch (error) {
      return {
        [key]: {
          status: 'down',
          message: error.message,
        },
      };
    }
  }
}

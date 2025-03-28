export interface ErrorResponse {
  success: boolean;
  statusCode: number;
  message: string | string[];
  timeStamp: string;
  path: string;
  method: string;
}

import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const exceptionResp = exception.getResponse();

    response
    .status(status)
    .json({
      "status": 0,
      "code": (exceptionResp && exceptionResp['code']) ? exceptionResp['code']: '',
      "message": (exceptionResp && exceptionResp['error']) ? exceptionResp['error']: '',
      "data": [],
      "error": {
        "debugId": (request['debugId']) ? request['debugId']: '',
        "errorMessage": (exceptionResp && exceptionResp['message']) ? exceptionResp['message']: '',
        "timestamp": new Date().toISOString(),
        "path": request.url,
      }
    });

  }
}

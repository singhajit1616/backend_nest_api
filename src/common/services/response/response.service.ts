import { Injectable } from '@nestjs/common';
import { InputFailure, InputSuccess, Response } from 'src/common/dto/response.dto';

@Injectable()
export class ResponseService {

  constructor() {}

  /**
   * On Success, send response on success
   * @param inputObject InputSuccess
   */
   onSuccess(inputObject: InputSuccess): Response {
    return {
      status: 1,
      code: inputObject.code,
      message: inputObject.message,
      data: inputObject.data,
      error: null
    }
  }

  /**
   * On Failure, send response on failure
   * @param inputObject InputFailure
   */
  onFailure(inputObject: InputFailure): Response {
      return {
        status:  0,
        code: inputObject.code,
        message: inputObject.message,
        data: null,
        error: {
          debugId: inputObject['debugId'],
          errorMessage: inputObject.errorMessage,
          timestamp: new Date().toISOString(),
          path: '',
        }
      }
  }
}

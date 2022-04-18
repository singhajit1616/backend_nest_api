
/**
 * Response DTO
 */
export interface Response {
  status: number,
  code: number,
  message: string,
  data: [] | Object,
  error: {
    debugId: string,
    errorMessage: string | string[],
    timestamp: string,
    path: string
  }
}

/**
 * Input DTO for success
 */
export interface InputSuccess {
  code: number,
  message: string,
  data: [] | Object
}

/**
 * Input DTO in case of failure
 */
export interface InputFailure {
  code: number,
  message: string,
  errorMessage: string | string[],
  debugId: string
}
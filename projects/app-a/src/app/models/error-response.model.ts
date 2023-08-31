import { HttpStatusCode } from "@angular/common/http";

export interface ErrorResponseModel {
  status: HttpStatusCode,
  message: string,
  stackTrace: string
}
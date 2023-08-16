import { HttpClient } from '@angular/common/http';

import { ApiBaseService } from '../services/api-base.service';
import { ApiBaseMockService } from '../mocks/api-base-mock.service';

import { environment as environmentLocal } from '../../environments/environment';
import { EnvironmentService } from '../services/environment.service';

const ApiBaseServiceFactory = (
  http: HttpClient,
  environment: EnvironmentService,
) => {
  if (environmentLocal.useApiServiceMock) return new ApiBaseMockService();

  return new ApiBaseService(http, environment);
};

export const ApiBaseServiceProvider = {
  provide: ApiBaseService,
  useFactory: ApiBaseServiceFactory,
  deps: [HttpClient, EnvironmentService],
};
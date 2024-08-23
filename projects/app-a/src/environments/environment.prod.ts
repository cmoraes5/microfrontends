import { EnvironmentModel } from "projects/shared/src/public-api";

export const environment: EnvironmentModel = {
  production: true,
  useApiServiceMock: false,
  apiBaseUrl: 'http://localhost:5007'
};

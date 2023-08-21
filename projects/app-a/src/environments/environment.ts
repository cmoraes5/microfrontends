import { EnvironmentModel } from "projects/shared/src/public-api";

export const environment: EnvironmentModel = {
  production: false,
  useApiServiceMock: false,

  apiBaseUrl: 'http://localhost:5007/game'
};
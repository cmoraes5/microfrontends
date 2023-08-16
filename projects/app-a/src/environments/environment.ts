import { EnvironmentModel } from "projects/shared/src/public-api";

export const environment: EnvironmentModel = {
  production: false,
  useApiServiceMock: true,

  apiBaseUrl: 'http://localhost:5007/game'
};
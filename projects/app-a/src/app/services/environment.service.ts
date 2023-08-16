import { Injectable } from "@angular/core";

import { EnvironmentModel } from 'projects/shared/src/public-api';

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {

  getEnvironment(): EnvironmentModel {
    return environment;
  }
}
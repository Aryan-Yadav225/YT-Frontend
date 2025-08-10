import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { authConfig } from './auth/auth.config';
import { AuthInterceptor, provideAuth } from 'angular-auth-oidc-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()), // important!
    provideAuth(authConfig),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, provideAuth(authConfig),
  ],
};

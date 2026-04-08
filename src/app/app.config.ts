import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { App_Route } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { NgApexchartsModule } from "ng-apexcharts";
import { ColorPickerModule } from 'ngx-color-picker';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppStateService } from './shared/services/app-state.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { UserSessionService } from './shared/services/user-session.service';
import { firstValueFrom } from 'rxjs';

function initializeUserSession(userSessionService: UserSessionService): () => Promise<void> {
  return () => firstValueFrom(userSessionService.initSession());
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(App_Route),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUserSession,
      deps: [UserSessionService],
      multi: true
    },
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    provideCharts(withDefaultRegisterables()),
    BrowserModule, provideAnimations(),
    importProvidersFrom(
      AppStateService,
      ColorPickerModule,
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),
      AngularFireModule.initializeApp(environment.firebase),
      ToastrModule.forRoot({ positionClass: 'top' }),
      NgCircleProgressModule.forRoot({ "responsive": true }),
      NgbNavModule,
      FlatpickrModule.forRoot(),
      MatTableModule,
      MatTableDataSource,
      NgApexchartsModule,
      ColorPickerModule
    )
  ],
}

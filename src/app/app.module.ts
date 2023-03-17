import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetErrorComponent } from './components/widget-error/widget-error.component';
import { ErrorHandlingService } from './services/error-handling/error-handling.service';
import { DataService } from './services/data/data.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GlobalHttpErrorHandlerInterceptor } from './interceptors/global-http-error-handler.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    WidgetComponent,
    WidgetErrorComponent,
  ],
  providers: [
    DataService,
    ErrorHandlingService,
    {
      provide: ErrorHandler,
      useClass: ErrorHandlingService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpErrorHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

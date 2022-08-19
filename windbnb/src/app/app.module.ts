import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core/containers/app.component';
import { CoreModule } from './core/core.module';
import { STAYS_SERVICE } from './shared/constants';
import { StaysFakeService } from '@lbk/shared';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StateModule } from '@lbk/state/state.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StateModule.forRoot(),
  ],
  providers: [
    {
      provide: STAYS_SERVICE,
      useClass: StaysFakeService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

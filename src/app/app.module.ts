import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { XyzUserListComponent } from './user-list/user-list.component';
import { HttpModule } from '@angular/http';
import { ErrorHandlerService } from './shared/error-handler.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule ],
  declarations: [ AppComponent, XyzUserListComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ]
})
export class AppModule { }

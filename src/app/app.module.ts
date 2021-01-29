import { InterceptorService } from './interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ManualComponent } from './manual-component/manual.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestOne1Component } from './test-one1/test-one1.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SubBsubComponent } from './sub-bsub/sub-bsub.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestOne1Component,
    ManualComponent,
    CustomDirectiveDirective,
    CustomPipePipe,
    ChildComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    RxjsComponent,
    SubBsubComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

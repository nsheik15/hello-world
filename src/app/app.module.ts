import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestOne1Component,
    ManualComponent,
    CustomDirectiveDirective,
    CustomPipePipe,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

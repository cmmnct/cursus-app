import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SomeComponent } from './some/some.component';
import { ColorpatchesComponent } from './colorpatches/colorpatches.component';
import { HttpClientModule} from '@angular/common/http';
import { PatchdetailComponent } from './patchdetail/patchdetail.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    SomeComponent,
    ColorpatchesComponent,
    PatchdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

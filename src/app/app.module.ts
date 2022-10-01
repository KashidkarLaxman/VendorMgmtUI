import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddVendorComponent } from './modules/vendor/add-vendor/add-vendor.component';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './modules/Company/add-company/add-company.component';
import { VendorlistComponent } from './modules/vendor/vendorlist/vendorlist.component';
import { CompanyListComponent } from './modules/Company/company-list/company-list.component';
import { AddRoasterComponent } from './modules/Roaster/add-roaster/add-roaster.component';
import { ViewRoasterComponent } from './modules/Roaster/view-roaster/view-roaster.component';
import { UpdateRoasterComponent } from './modules/Roaster/update-roaster/update-roaster.component';
import { ValdemoComponent } from './modules/Company/valdemo/valdemo.component';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { Assignment1Component } from './assignment1/assignment1.component';
const approutes: Routes= [
  { path:'Add_vendor', component:AddVendorComponent
  },
  { path:'Add_company', component:AddCompanyComponent
  },
  { path:'Vendor_list', component:VendorlistComponent
},
{ path:'Company_list', component:CompanyListComponent
},
{ path:'add', component:AddCompanyComponent
},
{ path:'Add_Roaster', component:AddRoasterComponent 
},
{ path:'View_Roaster', component:ViewRoasterComponent
},
{ path:'Update_Roaster', component:UpdateRoasterComponent
},
{ path:'valdemo', component:ValdemoComponent
},
{ path:'login', component:LoginComponent
},
{ path:'billDriver', component:DashComponent
},
];
@NgModule({
  declarations: [
    AppComponent,
    AddVendorComponent,
    AddCompanyComponent,
    VendorlistComponent,
    CompanyListComponent,
    AddRoasterComponent,
    ViewRoasterComponent,
    UpdateRoasterComponent,
    ValdemoComponent,
    LoginComponent,
    DashComponent,
    Assignment1Component,
  
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MaterialModule,
  
    RouterModule.forRoot(approutes,{enableTracing:true}),

  
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }

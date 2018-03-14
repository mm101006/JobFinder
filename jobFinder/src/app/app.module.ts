import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { TechnologyComponent } from './technology/technology.component';
import { FinanceComponent } from './finance/finance.component';
import { RetailStoresComponent } from './retail-stores/retail-stores.component';
import { MedicalComponent } from './medical/medical.component';
import { RawMaterialsComponent } from './raw-materials/raw-materials.component';
import { AutoIndustryComponent } from './auto-industry/auto-industry.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { TransportationComponent } from './transportation/transportation.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ConstructionComponent } from './construction/construction.component';
import { MilitaryComponent } from './military/military.component';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { AppLoginComponent } from './app-login/app-login.component';

const appRoutes: Routes = [
  { path: 'technology', component: TechnologyComponent},
	{ path: 'finance', component: FinanceComponent, data: { test: 'Testing123'}},
	{ path: 'retail', component: RetailStoresComponent},
  { path: 'medical', component: MedicalComponent},
  { path: 'rawMaterials', component: RawMaterialsComponent},
  { path: 'autoIndustry', component: AutoIndustryComponent},
  { path: 'realEstate', component: RealEstateComponent},
  { path: 'manufacturing', component: ManufacturingComponent},
  { path: 'insurance', component: InsuranceComponent},
  { path: 'agriculture', component: AgricultureComponent},
  { path: 'transportation', component: TransportationComponent},
  { path: 'entertainment', component: EntertainmentComponent},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'construction', component: ConstructionComponent},
  { path: 'military', component: MilitaryComponent},
  { path: '', redirectTo: '', pathMatch: 'full'},
	{ path: '**', component: PageNotFoundComponent}]


@NgModule({
  declarations: [ 
    FinanceComponent,   
    TechnologyComponent,    
    AppComponent,
    PageNotFoundComponent,
    RetailStoresComponent,
    MedicalComponent,
    RawMaterialsComponent,
    AutoIndustryComponent,
    RealEstateComponent,
    ManufacturingComponent,
    InsuranceComponent,
    AgricultureComponent,
    TransportationComponent,
    EntertainmentComponent,
    RestaurantComponent,
    OtherComponent,
    ConstructionComponent,
    MilitaryComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

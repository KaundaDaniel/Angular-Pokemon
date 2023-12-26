import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Pages
import { HomeComponent } from './home/home.component';

//Modules

import { AppRoutingModule } from './routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [CommonModule, AppRoutingModule, SharedModule],
})
export class PagesModule {}

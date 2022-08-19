import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './containers/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { COMPONENTS } from './components';
import { RatingComponent } from '@lbk/shared/components/rating.component';

const CONTAINERS = [HomePageComponent];

@NgModule({
  declarations: [...CONTAINERS, COMPONENTS],
  imports: [CommonModule, HomeRoutingModule, RatingComponent],
})
export class HomeModule {}

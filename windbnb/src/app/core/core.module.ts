import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./components/header.component";
import {FooterComponent} from "./components/footer.component";
import {AppComponent} from "./containers/app.component";

const COMPONENTS = [HeaderComponent, FooterComponent];
const CONTAINERS = [AppComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS, ...CONTAINERS],
})
export class CoreModule {
}

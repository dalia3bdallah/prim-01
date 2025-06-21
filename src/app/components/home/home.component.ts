import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { ClientViewsComponent } from './client-views/client-views.component';
import { IntegrationComponent } from './integration/integration.component';
import { PricePackagesComponent } from './price-packages/price-packages.component';
import { FaqComponent } from './faq/faq.component';
import { SupportBlockComponent } from './support-block/support-block.component';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';



@Component({
  selector: 'prm-home',
  standalone: true,
  imports: [
    HeroComponent, 
    FeaturesComponent,
    ServicesComponent ,
    ClientViewsComponent,
    IntegrationComponent,
    PricePackagesComponent,
    FaqComponent,
    SupportBlockComponent,
  SharedTranslationModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {

}

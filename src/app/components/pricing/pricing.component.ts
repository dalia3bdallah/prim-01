import { Component } from '@angular/core';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';
import { Feature2Component } from "../../blocks-components/feature2/feature2.component";
@Component({
  selector: 'prm-pricing',
    standalone: true,
  imports: [SharedTranslationModule, Feature2Component],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

}

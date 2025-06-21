import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';
@Component({
  selector: 'prm-integration',
    standalone: true,
  imports: [ButtonModule ,SharedTranslationModule],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.css'
})
export class IntegrationComponent {

}

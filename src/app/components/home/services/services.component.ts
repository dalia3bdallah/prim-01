import { Component } from '@angular/core';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';
@Component({
  selector: 'prm-services',
  standalone: true, 
  imports: [SharedTranslationModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}

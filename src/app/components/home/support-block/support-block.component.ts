import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';
@Component({
  selector: 'prm-support-block',
  standalone: true,
  imports: [ButtonModule,SharedTranslationModule],
  templateUrl: './support-block.component.html',
  styleUrl: './support-block.component.css'
})
export class SupportBlockComponent {

}

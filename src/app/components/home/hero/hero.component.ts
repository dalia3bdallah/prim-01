import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';

@Component({
  selector: 'prm-hero',
    standalone: true,
  imports: [ButtonModule ,SharedTranslationModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}

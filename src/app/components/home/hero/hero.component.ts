import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';
import { Router } from '@angular/router';

@Component({
  selector: 'prm-hero',
  standalone: true,
  imports: [ButtonModule, SharedTranslationModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  constructor(private _route: Router) {}
  goDemo() {
    this._route.navigate(['/book-demo']);
  }
}

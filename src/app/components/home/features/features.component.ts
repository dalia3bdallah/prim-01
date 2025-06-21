import { Component,HostListener  } from '@angular/core';
import { SharedTranslationModule } from '../../../layouts/SharedTranslation.module';

@Component({
  selector: 'prm-features',
  standalone: true,
  imports: [SharedTranslationModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
 scrollDirection: 'up' | 'down' = 'down';
  lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > this.lastScrollTop) {
      this.scrollDirection = 'down';
    } else if (st < this.lastScrollTop) {
      this.scrollDirection = 'up';
    }

    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
}

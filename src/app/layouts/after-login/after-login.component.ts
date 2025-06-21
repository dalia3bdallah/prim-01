import { Component } from '@angular/core';
import { NavHomeComponent } from '../../navs/nav-home/nav-home.component';
import { FooterComponent } from '../../navs/footer/footer.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'prm-after-login',
  imports: [NavHomeComponent ,FooterComponent,RouterOutlet],
  templateUrl: './after-login.component.html',
  styleUrl: './after-login.component.css'
})
export class AfterLoginComponent {

}

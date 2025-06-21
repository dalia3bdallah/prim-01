import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { NavLogComponent } from "../../navs/nav-log/nav-log.component";
import { FooterLoginComponent } from '../../navs/footer-login/footer-login.component';


@Component({
  selector: 'prm-log-layout',
  imports: [RouterOutlet,NavLogComponent,FooterLoginComponent],
  templateUrl: './log-layout.component.html',
  styleUrl: './log-layout.component.css'
})
export class LogLayoutComponent {

}

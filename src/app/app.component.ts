import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'prm-root',
  imports: [RouterOutlet,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClient]
})
export class AppComponent {
  title = 'prim-01';
}

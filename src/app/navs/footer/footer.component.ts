import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'prm-footer',
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers:[HttpClient]
})
export class FooterComponent {

}

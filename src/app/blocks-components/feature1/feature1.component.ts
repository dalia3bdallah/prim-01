import { Component } from '@angular/core';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';

@Component({
  selector: 'prm-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css'] ,
  imports:[SharedTranslationModule]
})
export class Feature1Component {

}

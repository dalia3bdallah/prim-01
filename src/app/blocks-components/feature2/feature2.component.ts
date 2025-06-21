import { Component,EventEmitter,Input, Output } from '@angular/core';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';

@Component({
  selector: 'prm-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css'],
  imports:[SharedTranslationModule]
})
export class Feature2Component {
@Input() dataTransferFromParentToChild :string="";

@Output() dataTransferfromChildToParent:EventEmitter<string>= new EventEmitter();

sayHello():void{

 this.dataTransferfromChildToParent.emit('hi dadi !!');
 console.log();

}

}

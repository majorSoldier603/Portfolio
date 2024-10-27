import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-animatedVarText',
  template: '<p class="legaltextanibnt">{{varText}}</p>',
  styleUrls: ['./animatedVarText.component.scss']
})
@Injectable()
export class animatedVarTextComponent {
  varText:string|undefined
  
  public declareTextVar(varText:string) {
    if (varText === 'contact') {
      varText = 'Legal notice'
      return varText
    } else {
      varText = 'Contact me'
      return varText
    }
  }
}

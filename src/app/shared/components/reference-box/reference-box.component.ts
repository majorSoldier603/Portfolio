import {Component, Input} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference-box',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './reference-box.component.html',
  styleUrl: './reference-box.component.scss'
})
export class ReferenceBoxComponent {
  @Input() Reference: any = {
    name: '',
    title: '',
    comment: ''
  };

  @Input() ReferenceId = 0;
}

import {Component} from '@angular/core';
import {ReferenceBoxComponent} from '../../../shared/components/reference-box/reference-box.component';
import {NgForOf} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [ReferenceBoxComponent, NgForOf, TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  Reference: any = {
    name: '',
    title: '',
    comment: ''
  }

  referenc = {
    headtext: 'references.headtext',
  };

  References = [
    {
      name: 'V. Schuster ',
      title: 'Team Partner',
      comment: 'references.refOne'
    },
    {
      name: 'E.Eichinger',
      title: 'Team Partner',
      comment: 'references.refTow'
    },
    {
      name: 'I.Nuber',
      title: 'Frontend Engineer',
      comment: 'references.refThree'
    }
  ]
}

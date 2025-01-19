import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegalnoticeComponent } from './components/legalnotice/legalnotice.component'
import { ImpressumComponent } from "./components/impressum/impressum.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [LegalnoticeComponent, ImpressumComponent, CommonModule],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {
  isLegalNotice: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe(urlSegments => {
      const path = urlSegments[0]?.path; 
      this.isLegalNotice = path === 'legal';
    });
  }
}

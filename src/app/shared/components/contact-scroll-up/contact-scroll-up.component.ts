import {Component} from '@angular/core';
import {ScrollService} from "../../services/ScrollService/scroll.service";

@Component({
  standalone: true,
  selector: 'app-contact-scroll-up',
  templateUrl: './contact-scroll-up.component.html',
  styleUrls: ['./contact-scroll-up.component.scss']
})
export class ContactScrollUpComponent {

  constructor(private scrollService: ScrollService) {
  }

  scrollTo(elementId: string, offset: number) {
    this.scrollService.scrollToElement(elementId, offset);
  }
}

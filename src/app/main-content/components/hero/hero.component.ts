import {Component, OnInit} from '@angular/core';
import {ScrollService} from "../../../shared/services/ScrollService/scroll.service";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  bgColor: string = 'FFFCF3';
  textColor: string = 'black';

  constructor(private scrollService: ScrollService) {
  }

  ngOnInit(): void {
    this.fadeInOut(true)
  }

  fadeInOut(isFadeOut: boolean) {
    const element = document.querySelector('.fade-in-out');
    if (element) {
      if (isFadeOut) {
        element.classList.add('fade-out');
      } else {
        element.classList.remove('fade-out');
      }
    }
  }

  changeBntColor(isBlack: boolean) {
    if (isBlack) {
      this.bgColor = 'black';
      this.textColor = 'white';

    } else {
      this.bgColor = '#FFFCF3';
      this.textColor = 'black';
    }
  }

  scrollTo(elementId: string, offset: number) {
    this.scrollService.scrollToElement(elementId, offset);
  }
}

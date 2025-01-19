import {Component} from '@angular/core';
import {ScrollService} from "../../services/ScrollService/scroll.service";
import {SocialiconsComponent} from '../socialicons/socialicons.component';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, SocialiconsComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isChecked: boolean = false

  constructor(private scrollService: ScrollService, private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || 'en';
  }

  onCheckboxChange() {
    if (this.isChecked) {
      document.getElementById('mainbody')?.classList.add('stop-scrolling');
    } else if (!this.isChecked) {
      setTimeout(() => {
        document.getElementById('mainbody')?.classList.remove('stop-scrolling');
      }, 100);
    }
  }

  scrollTo(elementId: string, offset: number) {
    this.isChecked = false
    document.getElementById('mainbody')?.classList.remove('stop-scrolling');

    this.scrollService.scrollToElement(elementId, offset);
  }

  currentLang: string = 'en'; // Default language

  

  switchLang() {
    this.currentLang = this.currentLang === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLang);
  }
}

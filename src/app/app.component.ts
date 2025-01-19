import {Component} from '@angular/core';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {RouterOutlet, Router, NavigationEnd} from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, CommonModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';

  isImprintRoute = false;

  constructor(private router: Router,private translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');  
    translate.use('en');               
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.isImprintRoute = url.endsWith('/imprint') || url.endsWith('/legal');
      }
    });
  }
}

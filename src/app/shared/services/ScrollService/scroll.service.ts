import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToElement(elementId: string, offset: number) {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      const appRoot = document.getElementById("app-root")
      if (element && appRoot) {
        const y = element.getBoundingClientRect().top + appRoot.scrollTop - offset;
        appRoot.scrollTo({top: y, behavior: "smooth"});
      }
    }, 100);
  }
}

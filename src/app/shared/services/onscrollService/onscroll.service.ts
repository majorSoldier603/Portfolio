import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OnscrollService {
  private renderer: Renderer2;
  private timeoutMap = new Map<HTMLElement, ReturnType<typeof setTimeout>>();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeScrollEffect(selector: string, delay: number): void {
    window.addEventListener('scroll', () => {
      document.querySelectorAll(selector).forEach((element) => {
        const el = element as HTMLElement;
        const isVisible =
          el.getBoundingClientRect().top < window.innerHeight &&
          el.getBoundingClientRect().bottom > 0;

        if (isVisible) {
          if (!this.timeoutMap.has(el)) {
            const timeout = setTimeout(() => {
              this.renderer.addClass(el, 'active-hover');
              this.timeoutMap.delete(el);
            }, delay);
            this.timeoutMap.set(el, timeout);
          }
        } else {
          this.renderer.removeClass(el, 'active-hover');
          if (this.timeoutMap.has(el)) {
            clearTimeout(this.timeoutMap.get(el));
            this.timeoutMap.delete(el);
          }
        }
      });
    });
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FooterUIComponent,
  HeaderUIComponent,
  MainUIComponent,
} from '@choufa/ui';

@Component({
  selector: 'blog-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderUIComponent,
    FooterUIComponent,
    MainUIComponent,
  ],
  host: {
    class: 'flex flex-col h-full',
  },
  template: `
    <ui-header />
    <ui-main><router-outlet /></ui-main>
    <ui-footer />
  `,
})
export class AppComponent {}

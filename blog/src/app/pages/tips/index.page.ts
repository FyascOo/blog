import { injectContentFiles } from '@analogjs/content';
import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideNavUIComponent } from '@choufa/ui';
import { Tips } from '../../models/tips';

@Component({
  selector: 'choufa-tips',
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe, SideNavUIComponent],
  host: {
    class: 'w-full flex',
  },
  template: `
    <ui-side-nav></ui-side-nav>
    <ul>
      @for (tip of tips; track $index) {
      <li>
        <a [routerLink]="['/tips', tip.slug]">{{ tip.attributes.title }}</a>
      </li>
      }
    </ul>
  `,
})
export default class IndexPage {
  tips = injectContentFiles<Tips>();
}

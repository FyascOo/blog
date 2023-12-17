import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SideNavUIComponent } from '@choufa/ui';
import { Tips } from '../../models/tips';

@Component({
  selector: 'blog-tips',
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe, SideNavUIComponent],
  host: {
    class: 'w-full flex',
  },
  template: `
    <ui-side-nav />
    @if (tip$ | async; as tip) {
    <div class="flex flex-col p-2">
      <h2>{{ tip.attributes.title }}</h2>
      <analog-markdown [content]="tip.content" />
    </div>
    }
  `,
})
export default class TipsPage {
  tip$ = injectContent<Tips>();
}

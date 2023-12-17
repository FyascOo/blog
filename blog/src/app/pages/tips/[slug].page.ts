import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SideNavUIComponent } from '@choufa/ui';
import { Tips } from '../../models/tips';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe, SideNavUIComponent],
  host: {
    class: 'w-full flex',
  },
  template: `
    <ui-side-nav />
    @if (tip$ | async; as tip) {
    <h2>{{ tip.attributes.title }}</h2>
    <analog-markdown [content]="tip.content" />
    }
  `,
})
export default class TipsPage {
  tip$ = injectContent<Tips>();
}

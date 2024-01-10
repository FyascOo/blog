import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { SideNavUIComponent } from '@choufa/ui';
import { Post } from '../../models/post';

@Component({
  selector: 'blog-slug-posts',
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe, SideNavUIComponent],
  host: {
    class: 'w-full flex',
  },
  template: `
    <ui-side-nav [slugs]="slugs" />
    @if (post$ | async; as post) {
    <div class="flex flex-col p-2">
      <h2>{{ post.attributes.title }}</h2>
      <analog-markdown [content]="post.content" />
    </div>
    }
  `,
})
export default class SlugPortfolioPage {
  post$ = injectContent<Post>();
  slugs = [{ lien: '/portfolio/test-multiplication', title: 'Test multiplication' }];
}

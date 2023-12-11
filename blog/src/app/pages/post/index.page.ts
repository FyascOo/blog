import { injectContentFiles } from '@analogjs/content';
import { AsyncPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../models/post';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe],
  template: `
    <h1>My Posts</h1>
    <ul>
      @for (post of posts; track $index) {
      <li>
        <a [routerLink]="['/blog', post.slug]">{{ post.attributes.title }}</a>
      </li>
      }
    </ul>
  `,
})
export default class IndexPage {
  posts = injectContentFiles<Post>();
}

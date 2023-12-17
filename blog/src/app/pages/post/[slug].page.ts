import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    @if (post$ | async; as post) {
    <h2>{{ post.attributes.title }}</h2>
    <analog-markdown [content]="post.content" />
    }
  `,
})
export default class BlogPage {
  post$ = injectContent<Post>();
}

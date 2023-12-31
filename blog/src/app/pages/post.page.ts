import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <p>blog page works!!</p>
    <router-outlet />
  `,
})
export default class BlogPage {}

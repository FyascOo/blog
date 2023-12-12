import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderUIComponent } from '@choufa/ui';

@Component({
  standalone: true,
  imports: [RouterOutlet, HeaderUIComponent],
  template: `Je suis un développeur..`,
})
export default class IndexPage {}

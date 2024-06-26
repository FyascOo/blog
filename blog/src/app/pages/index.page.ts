import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderUIComponent } from '@choufa/ui';

@Component({
  selector: 'blog-index',
  standalone: true,
  imports: [RouterOutlet, HeaderUIComponent],
  host: {
    class: 'p-5 flex flex-col items-center',
  },
  template: `
    <img class="rounded-full border border-gray-900 w-2/6 mb-6" src="/assets/alan_profil.png" alt="user image" />
    <p>Bonjour, je m'appelle Alan Choufa.</p>
    <p>Développeur depuis quelques années, j'écris ce blog pour donner quelques « tips » acquis durant mes différentes expériences</p>
    <p>ainsi que des posts, qui sont plus des idées mises en vrac que de vrais articles...</p>
    <p>J'ai d'abord fait mes armes sur Angular, qui est rapidement devenu mon framework de cœur.</p>
    <p>J'ai eu la chance de pouvoir pratiquer du Java et ainsi avoir une solide expérience fullstack.</p>
    <p>Vous retrouverez également mes dernières créations open source. N'hésitez pas à aller jeter un coup d’œil aux repo ;)</p>
  `,
})
export default class IndexPage {}

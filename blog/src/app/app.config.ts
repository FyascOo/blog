import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import 'prismjs/components/prism-diff';
import 'prismjs/plugins/diff-highlight/prism-diff-highlight';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideContent(withMarkdownRenderer()),
  ],
};

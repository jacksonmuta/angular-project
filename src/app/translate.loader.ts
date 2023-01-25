import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

export class TranslateLoader implements TranslateLoader {
  constructor(private http: HttpClient) {}
  getTranslation(lang: string) {
    return this.http.get('assets/i18n/${lang}.json');
  }
}

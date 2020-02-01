import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.use("com");
  }
  title = 'custom-loader';

  translateLang(lang: string){
    if(this.translate.getLangs().includes(lang)){
      this.translate.use(lang);
    }
    else{
      this.translate.use(lang);
    }
  }

}

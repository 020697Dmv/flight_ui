import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudVuelos';


  constructor(private router:Router, public translate: TranslateService){
    this.translate.addLangs(['es','en']);
    this.translate.setDefaultLang('es');
    this.translate.use('en');

  }

  listar(){
    this.router.navigate(["listar"]) ;
  }

  nuevo(){
    this.router.navigate(["crear"])
  }

  vuelos(){
    this.router.navigate(["vuelos"])
  }

  

}

import { Component } from '@angular/core';
import {PostService} from './posts.service'

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title : string;


  constructor() {
    this.title='Angular Votos APP';


  }

  toggleSidebar():void{
    $('.ui.labeled.icon.sidebar').sidebar('toggle');
  }


}




import {Component} from '@angular/core';
import {Article} from './Article';

@Component({
    selector: 'votes-app',
    templateUrl:'./votes-component.html',
    styleUrls: ['./votes-component.css']
})
export class VotesApp{

    title:string = "Votes App";
    articles : Article[];

    constructor(){
        this.articles=[
            new Article('Angular2','http://angular.io',30),
            new Article('Sencha Ext JS','https://www.sencha.com/products/extjs/',15),
            new Article('Vue JS','https://vuejs.org/',10)
        ]
    }

    addArticle(title:HTMLInputElement,link:HTMLInputElement)
    :boolean{

        this.articles.push(
            new Article(title.value,link.value)
        ); //Se agrega el objeto recibido

        //Se limpia los value 
        title.value='';
        link.value='';

        return false;
    }

    sortedArticles():Article[]{
        return this.articles.sort((a:Article,b:Article)=> b.votes - a.votes);
    }
}
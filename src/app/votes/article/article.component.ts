import {Component} from '@angular/core';
import {Article} from '../article';

@Component({
    selector: 'article',
    host: {
        class:'row'
    },
    templateUrl:'./article.component.html',
    styleUrls: ['./article.component.css'],
    inputs:['article']
})
export class ArticleComponent{

    votes:number = 20;
    article:Article;

    voteUp():boolean{
        this.article.voteUp();
        return false;
    }

    
    voteDown():boolean{
        this.article.voteDown();
        return false;
    }
}
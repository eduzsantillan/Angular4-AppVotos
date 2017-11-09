import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { VotesApp } from './votes/votes-component';
import { ArticleComponent } from './votes/article/article.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    VotesApp,
    ArticleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

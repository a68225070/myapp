import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';

/*
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { GithubService } from './github/shared/github.service';
import { HttpModule } from '@angular/http';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';*/
import { HeroesComponent } from './heroes.component';
import { AppComponent } from './app.component';
import {HeroService} from './hero.service';

import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent/*
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    ContactComponent*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    /*ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })*/
  ],
  providers: [
    HeroService
//    GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

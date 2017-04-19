import {Component,OnInit} from '@angular/core';
import {HeroService} from './hero.service';

import { Router } from '@angular/router';
export class Hero{
	id:string;
	name:string;
}

@Component({
 // moduleId: module.id,
  selector: 'my-heroes',
//  templateUrl: './app.component.html',
	template:`<h1>{{title}}</h1>
            <h2>My Heroes</h2>
            <div>
              <label>Hero name:</label> <input #heroName />
              <button (click)="add(heroName.value); heroName.value=''">
                Add
              </button>
            </div>            
            <ul class="heroes">
              <li *ngFor="let hero of heroes"
                [class.selected]="hero === selectedHero"
                (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
                <button class="delete"
                  (click)="delete(hero); $event.stopPropagation()">x</button>
              </li>
            </ul>
            <div *ngIf="selectedHero">
              <h2>
                {{selectedHero.name | uppercase}} is my hero
              </h2>
              <button (click)="gotoDetail()">View Details</button>
            </div>
            `,
	styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    background-color: red ;

    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  button.delete {
    float:right;
    margin-top: 2px;
    margin-right: .8em;
    background-color: gray !important;
    color:white;
  }  
`],
  providers: [
//    HeroService
//    GithubService
  ]
})
export class HeroesComponent implements OnInit {
	title = 'Tour of COOP';
	heroes : Hero[];//HEROES;
	selectedHero: Hero;// = this.hero;

  constructor(
    private router: Router,
    private heroService: HeroService) { }

	onSelect(d: Hero):void{
    if (d===this.selectedHero){
      this.selectedHero = undefined;
    }else{
      this.selectedHero = d;
    }
	}
	getHeroes():void{
//		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
		//this.heroes = this.heroService.getHeroes();
	}
	ngOnInit():void{
		this.getHeroes();
	}

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }  

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }  

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
}



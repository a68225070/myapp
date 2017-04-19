import { Injectable } from '@angular/core';
import {Hero} from './app.component'; 


const HEROES: Hero[]=[
	{id:11,name:'Mr.HZCoop 1'},
	{id:12,name:'Mr.HZCoop 2'},
	{id:13,name:'Mr.HZCoop 3'},
	{id:14,name:'Mr.HZCoop 4'}
	];

@Injectable()
export class HeroService {
	getHeroes():Promise<Hero[]> {
		return Promise.resolve(HEROES);
	};

  getHeroesSlowly():Promise<Hero[]> {
  	return new Promise(resolve=>{
  		setTimeout(() => resolve(this.getHeroes()),2000);
  	})
	};
}
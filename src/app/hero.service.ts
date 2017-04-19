import { Injectable } from '@angular/core';
import {Hero} from './heroes.component'; 


const HEROES: Hero[]=[
	{id:'11',name:'Mr.HZCoop 1'},
	{id:'12',name:'Mr.HZCoop 2'},
	{id:'13',name:'Mr.HZCoop 3'},
	{id:'14',name:'Mr.HZCoop 4'},
	{id:'15',name:'Mr.HZCoop 4'},
	{id:'16',name:'Mr.HZCoop 4'},
	{id:'17',name:'Mr.HZCoop 4'},
	];

@Injectable()
export class HeroService {
	getHeroes():Promise<Hero[]> {
		return Promise.resolve(HEROES);
	};

  getHeroesSlowly():Promise<Hero[]> {
  	return new Promise(resolve=>{
  		setTimeout(() => resolve(this.getHeroes()),100);
  	})
	};
	getHero(id: string): Promise<Hero> {
	  return this.getHeroes()
	             .then(heroes => heroes.find(hero => hero.id === id));
	}	
}
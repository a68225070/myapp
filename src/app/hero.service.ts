import {Hero} from './heroes.component'; 
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

/*
	getHeroes():Promise<Hero[]> {
		return Promise.resolve(HEROES);
	};
*/
  getHeroesSlowly():Promise<Hero[]> {
  	return new Promise(resolve=>{
  		setTimeout(() => resolve(this.getHeroes()),100);
  	})
	};
	/*
	getHero(id: string): Promise<Hero> {
	  return this.getHeroes()
	             .then(heroes => heroes.find(hero => hero.id === id));
	}	*/

	getHero(id: string): Promise<Hero> {
	  const url = `${this.heroesUrl}/${id}`;
	  return this.http.get(url)
	    .toPromise()
	    .then(response => response.json().data as Hero)
	    .catch(this.handleError);
	}	
	private headers = new Headers({'Content-Type': 'application/json'});

	update(hero: Hero): Promise<Hero> {
	  const url = `${this.heroesUrl}/${hero.id}`;
	  return this.http
	    .put(url, JSON.stringify(hero), {headers: this.headers})
	    .toPromise()
	    .then(() => hero)
	    .catch(this.handleError);
	}	
	create(name: string): Promise<Hero> {
	  return this.http
	    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}	
	delete(id: string): Promise<void> {
	  const url = `${this.heroesUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}	
}
import {Component} from '@angular/core';

export class Hero{
	id:number;
	name:string;
}

const HEROES: Hero[]=[
	{id:11,name:'Mr.HZCoop 1'},
	{id:12,name:'Mr.HZCoop 2'},
	{id:13,name:'Mr.HZCoop 3'},
	{id:14,name:'Mr.HZCoop 4'}
	];
	

@Component({
  selector: 'app',
//  templateUrl: './app.component.html',
	template:`<h1>{{title}}</h1>
						<ul class="heroes">
							<li *ngFor="let d of heroes" (click)="onSelect(d)" [class.selected]="d===selectedHero">
								<span class="badge">{{d.id}}</span>{{d.name}}
							</li>
						</ul>
						<hero-detail [hero]="selectedHero"></hero-detail>`,
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
`]
})
export class AppComponent {
	title = 'Tour of COOP';
	heroes = HEROES;

	hero: Hero = {
		id:10,
		name:'ftkw361'
	};

	selectedHero: Hero;// = this.hero;

	onSelect(d: Hero):void{
		this.selectedHero = d;
	}
}



import { Pokemon } from './core/pokemon';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon-service/pokemon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pokedex-front';

  pokemons: Pokemon[];

  cols: any[];

  config: any;

  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
    this.getAllPokes();
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.pokemons.length
    };
  }

  getAllPokes() {
    this.pokemons = [];
    this.pokemonService.getAll().subscribe((data: any) => {
      console.log(data);
      this.pokemons = data;
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}

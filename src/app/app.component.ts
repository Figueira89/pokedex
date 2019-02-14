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

  constructor(public pokemonService: PokemonService) { }

  ngOnInit() {
    this.getAllPokes();
  }

  getAllPokes() {
    this.pokemons = [];
    this.pokemonService.getAll().subscribe((data: any) => {
      console.log(data);
      this.pokemons = data;
    });
  }
}

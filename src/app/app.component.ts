import { Pokemon } from './core/model';
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

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getAllPokes();
  }

  getAllPokes(): void {
    this.pokemonService.getAll().subscribe(pokemons => {
      this.pokemons = pokemons;
      console.log(this.pokemons);
    });
  }
}

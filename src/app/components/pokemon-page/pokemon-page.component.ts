import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PokeapiService} from "../../services/pokeapi.service";
import {Pokemon} from "../../models/Pokemon";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {
  pokemon: any | undefined;

  selected = 0;
  moves: any[] = [];
  constructor(private route: ActivatedRoute, private pokeApiService: PokeapiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idOrName = params['idOrName'];
      this.pokeApiService.getPokemon(idOrName).subscribe(pokemon => {
        console.log(pokemon)
        this.pokemon = pokemon;
        this.loadMoves();
      }, error => {
        this.pokemon = null;
      });
    });
  }
  loadMoves() {
    this.moves = [];
    if (this.pokemon && this.pokemon.moves) {
      this.pokemon.moves.forEach( (move: any) => {
        this.pokeApiService.getMove(move.move.url).subscribe(moveData => {
          this.moves.push(moveData);
          console.log(this.moves)
        },);
      });
    }
  }
  getPokemonBackgroundColor(): string {
    if (this.pokemon && this.pokemon.types.length > 0) {
      // Map type names to corresponding colors (you can adjust these as needed)
      const typeColors : { [key: string]: string }  = {
        grass: 'green',
        fire: 'red',
        water: 'blue',
        // we can add more types and colors as needed
      };

      const firstType = this.pokemon.types[0].type.name;
      return typeColors[firstType] || 'gray'; // Default to gray if type not found
    }
    return 'gray';
  }
  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string }  = {
      grass: 'green',
      fire: 'red',
      water: 'blue',
      // we can  add more types and colors as needed
    };

    return typeColors[type] || 'gray'; // Default to gray if type not found
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PokeapiService} from "../../services/pokeapi.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  searchInput: string = '';
  randomId: number = Math.floor(Math.random() * 898) + 1; // There are 898 Pokemon

  constructor(private router: Router, private pokeApiService: PokeapiService) {}

  ngOnInit(): void {}

  searchPokemon() {
    this.router.navigate(['/pokemon', this.searchInput]);
  }

  goToRandomPokemon() {
    this.router.navigate(['/pokemon', this.randomId]);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon} from "../models/Pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private baseUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemon(idOrName: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}pokemon/${idOrName}`);
  }
  getMove(moveUrl: string): Observable<any> {
    return this.http.get(moveUrl);
  }
}

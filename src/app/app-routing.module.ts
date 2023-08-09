import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchPageComponent} from "./components/search-page/search-page.component";
import {PokemonPageComponent} from "./components/pokemon-page/pokemon-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'pokemon/:idOrName', component: PokemonPageComponent },
  { path: '**', redirectTo: '/search' } // Redirect to search page for unknown paths
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

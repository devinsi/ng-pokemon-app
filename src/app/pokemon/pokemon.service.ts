import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(Pokemon => Pokemon.id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte', 
      'Normal', 
      'Electric', 
      'Poisson', 
      'Fée', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }

}

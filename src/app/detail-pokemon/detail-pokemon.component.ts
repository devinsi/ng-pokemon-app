import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',

})
export class DetailPokemonComponent {

  pokemonList: Pokemon[];
  pokemon: Pokemon |undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    this.pokemonList = POKEMONS;
    // Récupère l'id depuis le routeur à l'instant t
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    }
    

  }
}

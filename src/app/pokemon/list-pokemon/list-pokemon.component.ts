import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',

})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[] ;

  constructor(
    private router: Router,
    private pokemonService: PokemonService // System of Dependencie Injection - to get instance of PokemonService 
  ){}
  
  ngOnInit() {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

 
  goToPokemonDetail(pokemon: Pokemon){
    this.router.navigate(['/pokemons', pokemon.id]);
  }

}

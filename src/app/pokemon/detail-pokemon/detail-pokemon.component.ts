import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',

})
export class DetailPokemonComponent {

  pokemonList: Pokemon[];
  pokemon: Pokemon |undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService: PokemonService // System of Dependencie Injection - to get instance of PokemonService
    ){}

  ngOnInit(): void{
    this.pokemonList = this.pokemonService.getPokemonList();
    // Récupère l'id depuis le routeur à l'instant t
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
      if(pokemonId){
        this.pokemon = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
      }
    }
    goToPokemonList() {
      this.router.navigate(['/pokemons']);
    }
    

  
}

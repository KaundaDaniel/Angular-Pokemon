import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../service/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  private urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
  private urlName = 'https://pokeapi.co/api/v2/pokemon-species';
  public showPokemon: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.pokemon;
  }
  get pokemon() {
    const id = this.activatedRoute.snapshot.params['id'];

    const pokemon = this.pokeApiService.apiGetPokemons(
      `${this.urlPokemon}/${id}`
    );
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe((res) => {
      this.showPokemon = res;
      console.log(this.showPokemon[0]);
    });
  }
}

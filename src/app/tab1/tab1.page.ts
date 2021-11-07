import { Pelicula, RespuestaMDB } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  peliculasRecientes: Pelicula[];
slideOpts= {
  slidesPerView: 1.1,
  freeMode: true
};
  constructor(private moviesService: MoviesService) {}




  ngOnInit(){
    this.moviesService.getFetaures()
    .subscribe( (resp: RespuestaMDB) =>{
      console.log('Resp', resp);
      this.peliculasRecientes = resp.results;
    });
  }
}

import { Component, OnInit,ViewChild } from '@angular/core';
import { FilmService } from 'src/app/core/services/film/film.service';
import { Film } from 'src/app/core/models/film.model';

import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FilmsCategoryService } from 'src/app/core/services/film/films-category.service';
import { T } from '@angular/cdk/keycodes';
import { CategoryService } from 'src/app/core/services/film/category.service';

interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  @ViewChild('filterBar')
  filterBarComponent!: FilterBarComponent;

  currentMovieImage = "https://i.postimg.cc/BQ4pYSnk/image-9.png";
  Films: Film[] = [];
  FilmsCopy: Film[] = [];
  CategoryList= this.categoryService.categoriesList;
  FilmCategoryList=this.filmCategoriesService.FilmCategoryList;
  searchQuery = '';


  selectedFilters:Object[]=[];
  genreFilterInfo:string="default";

  constructor(private movieService: FilmService,private filmCategoriesService:FilmsCategoryService,private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.movieService.getFilms().subscribe((response) => {
      this.Films = response;
      this.FilmsCopy = response.slice();
    });
  }

  searchMovies(): void {
      this.Films = this.movieService.searchFilms(this.searchQuery, this.FilmsCopy);
  }

  applyFilter(event: { value: string, viewValue: string }[]) {

    this.selectedFilters=event;
    this.genreFilterInfo=event[0].value
    if (event.every(item => item.value === 'default')) {
      this.Films = this.FilmsCopy.slice();
    } else {
      this.Films=this.filterMoviesByGenre()!;
    }
  }

  filterMoviesByGenre() {
    if (this.genreFilterInfo === 'default') {
      return this.Films = this.FilmsCopy.slice();

    } else {
      const selectedFilms = new Set<Film>();//Array de peliculas que cumplen el filtro

      this.FilmCategoryList.forEach((filmCategory)=>{ //Recorremos la lista de relacion entre peliculas con categorias y buscamos las peliculas que tengan la categoria que estamos filtrando
        let idsCategoriasFilm=this.filmCategoriesService.getIDsCategoriesByFilmID(filmCategory.Film_id);//Obtenemos los IDs de las categorias de la pelicula
        let name_categories=this.categoryService.getCategoriesNamesOfFilm(idsCategoriasFilm);//Obtenemos los nombres de las categorias de la pelicula
        if(name_categories.includes(this.genreFilterInfo)){//Si la pelicula tiene la categoria que estamos filtrando
          selectedFilms.add(this.FilmsCopy.find(film=>film.id==filmCategory.Film_id)!);//Añadimos la pelicula al array de peliculas que cumplen el filtro
        }
      })
      return selectedFilms.size > 0 ? Array.from(selectedFilms) : []; //Si hay peliculas que cumplen el filtro devolvemos el array de peliculas que cumplen el filtro, si no, devolvemos un array vacio
    }
  }


}

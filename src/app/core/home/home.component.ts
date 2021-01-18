import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/movies/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  genres;
  movies: any[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
    .subscribe(movies => {
      this.movies = movies;
      this.genres = this.getGenres(movies);
    });
  }

  /**
   * extract all genres types from the given 
   * movies results
   * @param movies
   * @returns array of string (genres)
   */
  getGenres(movies: any[]) {
    const genres =  movies.reduce((acc, curr) => {
      return acc.concat(curr.genres);
    }, []);

    const uniqueGenres = Array.from(new Set(genres));

    return uniqueGenres;
  }

  /**
   * get movies from genres
   * @param genre
   */
  getMovieByGenre(genre: string) {
    const genreMovies = [];
    this.movies.forEach(movie => {
      if (movie.genres.find(gn => gn === genre)) {
        genreMovies.push(movie);
      }
    });
    return genreMovies;
  }

}

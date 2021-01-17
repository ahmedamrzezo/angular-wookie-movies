import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: any;

  year;

  constructor(private actRoute: ActivatedRoute, private moviesServices: MovieService) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe(param => {
      const slug = param.slug;

      if (!this.moviesServices.movies) {
        this.moviesServices.getMovies().subscribe(movies => {
          this.selectedMovie = movies.find(movie => movie.slug === slug);

          const slugSplitted = this.selectedMovie.slug.split('-');
          this.year = slugSplitted[slugSplitted.length - 1];
        });
      } else {
        this.selectedMovie = this.moviesServices.movies.find(movie => movie.slug === slug);

        const slugSplitted = this.selectedMovie.slug.split('-');
        this.year = slugSplitted[slugSplitted.length - 1];
      }
    });
  }

}

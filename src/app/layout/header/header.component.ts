import { Component, OnInit } from '@angular/core';
import { asyncScheduler, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { MovieService } from 'src/app/core/movies/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchKeyword: string;

  search$ = new Subject();

  results: any[];

  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    this.search$
    .pipe(
      debounceTime(1000, asyncScheduler),
      switchMap(() => this.moviesService.getMovies(this.searchKeyword))
    )
    .subscribe((res) => {
      this.results = res;
    });
  }
}

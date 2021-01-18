import { Component, OnInit } from '@angular/core';
import { asyncScheduler, Observable, Subject } from 'rxjs';
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
    this.doSearch()
    .subscribe((res) => {
      this.results = res;
    });
  }


  /**
   * listen for search change emissions
   * and wait 1 second for each emission
   * @then switch to the most recent movies observable to get data
   */
  doSearch(): Observable<any[]> {
    return this.search$
    .pipe(
      debounceTime(1000, asyncScheduler),
      switchMap(() => this.moviesService.getMovies(this.searchKeyword))
    );
  }
}

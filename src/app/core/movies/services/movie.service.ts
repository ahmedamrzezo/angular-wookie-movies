import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies;

  constructor(private http: HttpClient) { }

  /**
   * call http client to get movies
   * optional @param searchKeyword
   */
  getMovies(searchKeyword?: string): Observable<any[]> {
    let params = new HttpParams();

    if (searchKeyword) {
      params = params.set('q', searchKeyword);
    }

    return this.http.get<{movies: any[]}>(`${environment.apiUrl}/movies`, { params })
    .pipe(tap(res => (this.movies = res.movies)), map(res => res.movies));
  }
}

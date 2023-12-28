import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  loadedMovies: any = [];

  page = 1;
  count = 10;
  pageSize = 5;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
      this.retrieveMovies();
      console.log(this.loadedMovies);
  }

  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveMovies(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.moviesService.fetchTopRated(params)
    .subscribe(
      movies => {
        this.loadedMovies = movies;
      });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveMovies();
  }

}

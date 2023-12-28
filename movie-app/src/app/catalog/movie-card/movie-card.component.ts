import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() title: string = "";
  @Input() year: string = "";
  @Input() poster_path: string = "";
  @Input() overview: string = "";
  @Input() backdrop_path: string = "";
  @Input() id: number | undefined;

  baseURL: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private router: Router) { }

  ngOnInit(): void {
    //this.year = parseInt(this.year).toString();
    //this.poster_path = this.baseURL + this.poster_path;
    //this.backdrop_path = this.baseURL + this.backdrop_path;
  }

  loadDetails() {
    this.router.navigate(['/catalog', this.id]);
  }

}

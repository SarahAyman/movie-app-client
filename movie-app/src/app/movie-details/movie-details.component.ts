import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: Movie = {
    title: '',
    tagline: '',
    overview: '',
    vote_average: 0,
    vote_count: 0,
    poster_path: '',
    backdrop_path: '',
    genres: [],
    runtime: 0,
    trailer: ''
  };

  trailerKey: string = '';
  trailerURL: string = '';

  baseURL: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.moviesService.fetchDetails(id)
    .subscribe(
      (details:any) => {
        this.movieDetails = details;
        //this.movieDetails.poster_path = this.baseURL + this.movieDetails.poster_path;
        //this.movieDetails.backdrop_path = this.baseURL + this.movieDetails.backdrop_path;
        this.movieDetails.vote_average = Math.round(this.movieDetails.vote_average * 10) / 10;
        console.log(this.movieDetails);
      });

      //this.fetchTrailer();

  }


  fetchTrailer() {
    const id = this.route.snapshot.params['id'];

    this.moviesService.fetchVideos(id)
    .subscribe(
      (videoDetails:any) => {
        console.log(videoDetails);
        this.trailerKey = videoDetails.results[0].key;
        this.trailerURL = `https://www.youtube.com/embed/${this.trailerKey}`;
      });
  }


}

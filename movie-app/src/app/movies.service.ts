import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { LoginComponent } from "./login/login.component";

@Injectable()
export class MoviesService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
        'Authorization': 'Bearer ' + this.authService.getToken()
      });

    constructor(private http: HttpClient, private authService: AuthService) {}

    fetchTopRated(params: any) {
        console.log(this.authService.getToken());
        console.log(this.headers);
        return this.http
        //.get('https://api.themoviedb.org/3/movie/top_rated?api_key=0fd29617dfe344edd49476e637c5e051&language=en-US&page=1')
        .get('http://localhost:8080/movies', { 'headers': this.headers, params })
        .pipe(
            map(
                (response: any) => {
                    const movies = [];
                    for(const movie in response) {
                        movies.push({...response[movie]});
                    }
                    return movies;
                })
        );
    }


    fetchDetails(movie_id: number) {
        return this.http
        //.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=0fd29617dfe344edd49476e637c5e051&language=en-US`)
        .get(`http://localhost:8080/movies/${movie_id}`, { 'headers': this.headers })
        .pipe(
            map(
                response => {
                    return response;
            }));
    }


    fetchVideos(movie_id: number) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=0fd29617dfe344edd49476e637c5e051&language=en-US`)
        .pipe(
            map(
                response => {
                    console.log(response);
                    return response;
                })
        );
    }

    

}
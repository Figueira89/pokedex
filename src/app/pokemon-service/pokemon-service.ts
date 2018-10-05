import { Pokemon } from './../core/model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({providedIn: 'root', })
export class PokemonService {

    constructor(private http: Http) {

    }

    getAll(): Observable<Pokemon[]> {
        return this.http.get(environment.myEnviroment + '/api/getAllMock').pipe(map(data => data.json() as Pokemon[]));
    }

}
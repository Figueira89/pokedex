import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({ providedIn: 'root', })
export class PokemonService {

    constructor(private http: HttpClient) { }

    endpoint = environment.myEnviroment + '/api/getAllMock';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    getAll(): Observable<any> {
        const head = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.endpoint, this.httpOptions).pipe(map(this.extractData));
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

}

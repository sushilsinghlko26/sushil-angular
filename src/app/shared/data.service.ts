import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import { AppError } from 'app/shared/app.error';
import { NotFoundError } from 'app/shared/not-found-error';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(url: string) {
    return this.http.get(url)
            .map(response => {
                return response.json();
            }).catch((error: Response) => {
              if (error.status === 404) {
                return Observable.throw(new NotFoundError());
              }
              return Observable.throw(new AppError(error));
            });
  }

}

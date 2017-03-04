import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions} from '@angular/http';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

    constructor(
        private http: Http,
    ) { }

    searchBook(title: string) {
        let url = `/api/book/search?keyword=${title}`;
        return this.http.get(url).map(res => res.json()); 
    }

    addBook(book) {
        let url = `/api/book/addbook`;
        let body = JSON.stringify(book);
        let headers = new Headers({'Content-Type':'application/json'});
        let reqOptions = new RequestOptions({headers:headers});

        return this.http.post(url,body,reqOptions).map(res => res);
    }

}
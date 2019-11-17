import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BooksModels} from '../models/books.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
public API = 'http://localhost:3000/books';
  constructor(private httpClient: HttpClient) { }
  getAllBooks(): Observable<BooksModels[]> {
    return this.httpClient.get<BooksModels[]>(this.API);
  }
  addBooks(booksmodels: BooksModels): Observable<BooksModels> {
    return this.httpClient.post<BooksModels>(this.API , booksmodels);
  }
}

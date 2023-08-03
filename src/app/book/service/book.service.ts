import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { bdata } from '../data/book.data';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  getBook(){
    return bdata;
  }
}

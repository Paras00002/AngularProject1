import { Component } from '@angular/core';
import { Book } from './model/book';
import { BookService } from './service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
    bk:Book[];
    constructor(private service:BookService){
      this.bk=service.getBook();
    }

}

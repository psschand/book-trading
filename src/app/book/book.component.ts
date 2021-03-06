import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-showbooks',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BookService, RequestService]
})
export class BookComponent implements OnInit {

    books:[any]

    constructor(
        private bookService:BookService,
        private requestService:RequestService,
        private router: Router,
    ) { }

    showBooks(){
        this.bookService.getAllBooks()
            .subscribe(books => {
                if(books.length){
                    this.books = books;
                }
            },error=>{
                this.bookService.openSnackBar(`${error.statusText}. Please Try Again`);
            })
    }

    requestBook(book){
        this.requestService.requestBook(book)
            .subscribe(books => {
                this.requestService.openSnackBar(`Successfully Request Book!`);
                this.showBooks();
            },error=>{
                this.bookService.openSnackBar(`${error.statusText}. Please Login!`);
            })
    }

    ngOnInit() {
        this.showBooks();
    }

}
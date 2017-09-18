import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  perPageFilter: number = 4;
  currentPage: number = 1; 
  length: number = 15;

  constructor() { }

  ngOnInit() {
  }

  switchPage(page:number){
    this.currentPage = page;
  }

}

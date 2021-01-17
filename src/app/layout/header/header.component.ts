import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchKeyword: string;

  constructor() { }

  ngOnInit(): void {
  }

  doSearch(val: string): void {
    console.log(val);
    
  }

}
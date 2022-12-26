import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  data: any = [{
    id: 1, ProductName: "iPhone 12", price: 59990
  }, {
    id: 2, ProductName: "iPhone 13", price: 69990
  }, {
    id: 3, ProductName: "iPhone 14", price: 59990
  }, {
    id: 4, ProductName: "iPhone 13 pro", price: 69990
  }, {
    id: 5, ProductName: "iPhone 12", price: 59990
  }, {
    id: 6, ProductName: "iPhone 13", price: 69990
  }, {
    id: 7, ProductName: "iPhone 14", price: 59990
  }, {
    id: 8, ProductName: "iPhone 13 pro", price: 69990
  },]

  constructor() { }

  ngOnInit(): void {
  }


}

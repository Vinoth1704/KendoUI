import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data: any = [{
    PolicyId: 0,
    Title: "",
    Description: "",
    StartDate: "",
    EndDate: "",
    InsuredAmount: 0,
    InsuredName: "",
    InsuredHolderAge: 0,
    PolicyType: 0,
    CoverageType: 0,
    VehicleNumber: "",
    VehicleModel: "",
    HouseAddress: "",
    AssetValue: 0
  }]

  Edit(id: number) {
    //Do Something
  }
  Remove(id: number) {
    //Do something
  }

}

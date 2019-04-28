import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service.js';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  dataSource = []
  constructor(public addressService: AddressService) {
      this.dataSource = addressService.loadAddressData("food");
  }

  ngOnInit() {
  }

}

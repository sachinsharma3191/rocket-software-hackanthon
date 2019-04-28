import { AddressService } from './../../services/address.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

  dataSource = []
  constructor(public addressService: AddressService) {
      this.dataSource = addressService.loadAddressData("shelter");
  }

  ngOnInit() {
    
   
  }

}

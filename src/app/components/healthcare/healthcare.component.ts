import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service.js';


@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements OnInit {
  dataSource = []
  constructor(public addressService: AddressService) {
      this.dataSource = addressService.loadAddressData("healthcare");
  }

  ngOnInit() {
  }

}

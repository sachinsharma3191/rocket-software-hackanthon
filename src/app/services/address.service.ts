import { Injectable } from '@angular/core';
import medical  from "../../assets/medical.json";
import restaurant from '../../assets/restaurant.json';
import shelter from '../../assets/shelter.json';
import stateAbbrevList from '../../assets/state-abbreviation.json';


@Injectable({
  providedIn: 'root'
})
export class AddressService {



  constructor() { }

  loadAddressData(type : String){
    let addresses = [];
    let dataSource= []
      if(type === "shelter"){
        addresses = shelter.addresses;
      }
      else if( type === "food"){
        addresses = restaurant.addresses.slice(400,1000);
      }
      else if( type  === "healthcare"){
        addresses = medical.addresses.slice(100,499);
      }
      let counter = 0;
      for(let add in addresses){
        let addressObject = {}
        let address = addresses[add];
        addressObject["position"] = ++counter;
        addressObject["address"] = address["address1"] + " " + address["address2"];
        addressObject["city"] = address["city"];
        addressObject["state"] = stateAbbrevList.filter(state => state.abbreviation === address["state"])[0].name;
        addressObject["postalCode"] = address["postalCode"]
        addressObject["lat"]=  address["coordinates"].lat;
        addressObject["long"]=  address["coordinates"].lng;
        dataSource.push(addressObject);
     }
     return dataSource;
  }
}

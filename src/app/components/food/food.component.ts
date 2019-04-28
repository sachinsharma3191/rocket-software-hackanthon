import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  AddressService
} from 'src/app/services/address.service.js';
import {
  Address
} from '../Address.module';
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  displayedColumns: string[] = ['position','address', 'city', 'state', 'postalCode','actions'];

  @ViewChild(MatPaginator) dataSource3: MatTableDataSource <Address> ;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public addressService: AddressService,private route: ActivatedRoute,
    private router: Router) {

  }

  applyFilter(filterValue: string) {
      this.dataSource3.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
      this.dataSource3 = new MatTableDataSource<Address>(this.addressService.loadAddressData("food"));
      this.dataSource3.paginator = this.paginator;
      this.dataSource3.sort = this.sort;
  }

  showMap(row){
    this.router.navigate(['map'],
    { queryParams: { long: row.long, lat: row.lat ,source: "food" } });
  }
}

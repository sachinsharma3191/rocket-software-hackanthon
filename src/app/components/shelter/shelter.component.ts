import {
  AddressService
} from './../../services/address.service';
import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatPaginator,
  MatTableDataSource,
  MatSort
} from '@angular/material';
import {
  Address
} from '../Address.module';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-shelter',
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent implements OnInit {

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
      this.dataSource3 = new MatTableDataSource<Address>(this.addressService.loadAddressData("shelter"));
      this.dataSource3.paginator = this.paginator;
      this.dataSource3.sort = this.sort;
  }

  showMap(row){
      this.router.navigate(['map'],
          { queryParams: { long: row.long, lat: row.lat ,source: "shelter" } });
  }
}

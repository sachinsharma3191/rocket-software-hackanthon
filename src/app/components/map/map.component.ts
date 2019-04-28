import {
  Component,
  OnInit
} from '@angular/core';
import {
  ParamMap,
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  source: string;
  long: number;
  lat: number;
  zoom: number = 8;
  mapType = 'satellite';
  selectedMarker;
  alpha =1;

  ngOnInit() {
      // 'bank' is the name of the route parameter
      this.long = parseInt(this.route.snapshot.queryParams['long']);
      this.lat = parseInt(this.route.snapshot.queryParams['lat']);
      this.source = this.route.snapshot.queryParams['source'];
     ;
  }

  navigateBack() {
      let source = this.source;
      if (source === "shelter") {
          this.router.navigate(['shelter']);
      } else if (source === "healthcare") {
          this.router.navigate(['healthcare']);
      } else if (source === "food") {
          this.router.navigate(['food']);
      }
  }


  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }

}


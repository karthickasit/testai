import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { timer } from 'rxjs';
import {switchMap} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angg';
  refreshdata: any;
  datafromapi: any;
  datatomodal: any;
  constructor(private ser:ApiService)
  {

  }
  ngOnInit()
  {
    this.refreshdata=timer(0,10000)
    .pipe(switchMap(()=>this.ser.getdata())).subscribe((response:any)=>{
console.log(response.hits);
this.datafromapi=response.hits;
    })
    
  }
  showmodal(dat)
  {
   
    this.datatomodal=dat;
  }
}

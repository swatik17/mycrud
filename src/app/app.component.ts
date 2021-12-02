import { Component } from '@angular/core';
import { CrudserviceService } from './crudservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDApplication';
  public data:any;
  constructor(private crudser:CrudserviceService){ }

  ngOnInit(): void{
    this.crudser.getdata().subscribe((res)=>{
    this.data =res;
    console.log(res);
    })
  }
}

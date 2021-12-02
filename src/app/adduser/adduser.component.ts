import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CrudserviceService } from '../crudservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor( private fb:FormBuilder,private crudser:CrudserviceService) { }
 adduserForm:any;
 
  ngOnInit(): void {
    this.adduserForm=this.fb.group({
      username:['',[Validators.required]],
      email:[''],
      phone:['']
    })
  }
  createuser(){
    this.crudser.addUser(this.adduserForm.value).subscribe((data) =>{
      console.log('User Created');
    },err =>{
      console.log(err);
    })
   
  
  }

}

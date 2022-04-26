import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  person:iUser = {
    email:'',
    pswd:'',
    name:'',
    cat:''
  }
  cats = ["plastic","stil" ]

  data:any = []

  constructor() { }

  ngOnInit(): void {
  }

  submit(login: any){
    console.log(login.value)
  }
}
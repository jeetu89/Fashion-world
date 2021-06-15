import { Component, OnInit } from '@angular/core';
import { FinalService } from 'src/app/services/final.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
resdata;
prodata;

  constructor(private myser:FinalService,private router:Router) { }
  

  ngOnInit() {
   
    this.myser.getProduct()
    .subscribe(res=>
      {
        console.log(res);
        this.resdata=res;
        if(this.resdata.err==0)
        {
          this.prodata=this.resdata.pdata;
        }
      })
  }
  addcart(pid)
  {
    if(localStorage.getItem('pcart')!=undefined)
    {
        let arr=JSON.parse(localStorage.getItem('pcart'));
        arr.push(pid);
        localStorage.setItem('pcart',JSON.stringify(arr));
        alert("Product Add cart Successfully");
        
    }
    else 
    {
       let arr=[];
       arr.push(pid);
       localStorage.setItem('pcart',JSON.stringify(arr));
       alert("Product Add cart Successfully");
    }
  }

}

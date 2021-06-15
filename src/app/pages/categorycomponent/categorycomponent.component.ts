import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinalService } from 'src/app/services/final.service';
@Component({
  selector: 'app-categorycomponent',
  templateUrl: './categorycomponent.component.html',
  styleUrls: ['./categorycomponent.component.css']
})
export class CategorycomponentComponent implements OnInit {
  catname:any;
  resData:any;
  proData:any;
  constructor(private ar:ActivatedRoute,private ser:FinalService) { }

  ngOnInit() {
    this.ar.params.subscribe(par=>
      {
        this.catname=par.cname;
        this.ser.getProductByCategory(this.catname)
        .subscribe(res=>
          {
            console.log(res);
            this.resData=res;
            if(this.resData.err==0)
            {
              this.proData=this.resData.pdata;
            }
          })
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

import { Component, OnInit } from '@angular/core';
import { FinalService } from 'src/app/services/final.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  uid: String;
  resData;
  catData;
  search:any;
  cartItem:number=0;
  constructor(private ser:FinalService,private router:Router) { }
  logout()
    {
      let con=confirm("Do u want to Logout");
      if(con)
      {
      localStorage.removeItem('sid');
      this.router.navigate(["/login"]);
      }
    }
  onSearch()
  {
    if(this.search!=undefined)
    {
    this.router.navigate(['search/'+this.search])
    }
  }
  ngOnInit() {
    this.uid=localStorage.getItem('sid');
    if(localStorage.getItem("pcart")!=undefined)
    {
      let arr=JSON.parse(localStorage.getItem("pcart"));
      this.cartItem=arr.length;
    }
    this.ser.getCategory()
    .subscribe(res=>
      {
        this.resData=res;
        if(this.resData.err==0)
        {
          this.catData=this.resData.cdata;
        }
      })
    }

}

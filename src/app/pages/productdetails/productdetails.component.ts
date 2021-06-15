import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinalService } from 'src/app/services/final.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  pid:any;
  resData:any;
  proData:any;
  constructor(private ar:ActivatedRoute,private fser: FinalService) { }

  ngOnInit() {
    this.ar.params.subscribe(par=>
      {
        this.pid=par.pid;
        // console.log(this.pid);
        this.fser.getProductById(this.pid)
        .subscribe(res=>
          {
            this.resData=res;
            if(this.resData.err==0)
            {
              this.proData=this.resData.pdata;
              console.log(this.proData)
            }
          })
      })
  
  }

}

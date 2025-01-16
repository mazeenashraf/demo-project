import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
proudctimage:string[]=[
  "/imgsangular/poert1.png",
 "/imgsangular/port2.png",
   "/imgsangular/port3.png",
]
// proudctdeatils:string='';
// showdata(term:any):void{
//   this.proudctdeatils=term

// }
btnshow:string=''
showdata(term:any):void{
  this.btnshow=term;
}


}

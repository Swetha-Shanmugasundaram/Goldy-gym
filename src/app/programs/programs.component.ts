import { Component, OnInit } from '@angular/core';
import { GymserviceService } from '../gymservice.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  private details:any
  constructor(private Gymservices: GymserviceService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      console.log(params)
      this.getDetail(params.programname)
    });
   }


  ngOnInit() {
    console.log("detail");
  //  this.getDetail();
  }
   getDetail(currentRouteParam){

     this.Gymservices.getProgramdetailsFromBackend(currentRouteParam).subscribe(data =>{
       console.log(data)
       this.details=data;    
     });
     console.log(this.details);
   }
// details2= {
//   "name": "YOGA",
//   "about": "Dolore aliquip culpa eu magna laborum cillum amet veniam aliquip ea do elit. Mollit qui eiusmod sint nulla mollit aliquip. Mollit nulla proident labore proident officia irure do officia duis officia excepteur laborum veniam quis. Mollit adipisicing quis elit id deserunt irure Lorem cupidatat aliqua incididunt ullamco pariatur aliqua. Mollit commodo laboris culpa elit nostrud sunt aliquip eiusmod. Proident pariatur esse sit eiusmod nisi id occaecat anim reprehenderit anim. Deserunt ea sit et sint elit dolore dolor adipisicing reprehenderit tempor in ea qui. Ex mollit proident dolore sit ullamco proident cillum cillum labore minim officia nisi elit cillum. Occaecat deserunt sit ad fugiat fugiat dolor adipisicing consectetur velit irure consectetur laborum enim non. Cillum veniam nisi adipisicing exercitation ad cupidatat esse do fugiat commodo laborum adipisicing exercitation.",
//   "benefits": "Ipsum mollit labore reprehenderit et. Reprehenderit minim ad eiusmod dolor tempor incididunt Lorem enim qui cupidatat anim. Sint ut reprehenderit amet non. Sunt in et culpa Lorem sint ea esse nisi officia non. Sit aliqua cupidatat laborum mollit deserunt minim."
// }

}

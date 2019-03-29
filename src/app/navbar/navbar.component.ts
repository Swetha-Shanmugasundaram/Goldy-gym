import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymserviceService } from '../gymservice.service';
import { ProgramsComponent } from '../programs/programs.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // template: '<app-program [childMessage]="parentMessage"></app-program>',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    console.log("detail")
  }

  yoga(){
    // this.program.getDetail();   
  }

  // route(){
  //   this.router.navigate(["/","yoga"])
  //   this.router.navigate(["/","s&c"])
  //   this.router.navigate(["/","boxing"])
  //   this.router.navigate(["/","hrx"])
  // }
}

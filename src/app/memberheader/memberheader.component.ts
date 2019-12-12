import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberheader',
  templateUrl: './memberheader.component.html',
  styleUrls: ['./memberheader.component.css']
})
export class MemberheaderComponent implements OnInit {

  imgsrc: string;
  public pageName:string;
  public countryName:string;
  public indonesiaCust = false;
  approvedialog = 'none';

  constructor(  private router: Router) {  }

  ngOnInit() {
    this.pageName=localStorage.getItem('pageName');
    this.imgsrc="assets/images/logo.jpg";
    this.countryName = localStorage.getItem('country');
    if(this.countryName == "Indonesia"){
      this.indonesiaCust = false;
    }else{
      this.indonesiaCust = true;
    }
  }

  mainHeader(){
    if(this.pageName=="memberhome") {
        this.router.navigate(['/memberhome']);
    }
    else{
      this.router.navigate(['/home']);
    }    
  }
}

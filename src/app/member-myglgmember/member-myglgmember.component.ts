import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-member-myglgmember',
  templateUrl: './member-myglgmember.component.html',
  styleUrls: ['./member-myglgmember.component.css']
})
export class MemberMyglgmemberComponent implements OnInit {
  loadinggif:boolean = false;
  public menu4 = false;
  showMyMemList: any = {};
  public nodatadialog = 'none';
  
  public indonesiaCust = false;

  constructor(  

    private router: Router,
    private userService: UserService

  ) {  }


  ngOnInit() {
    this.clickMenu4();
  }

  clickMenu4(){
    this.loadinggif = true;
    this.menu4 = false;
    var country = localStorage.getItem('country');
    this.userService.getMyMemberList(localStorage.getItem('memberNumber'))
    .subscribe(
      data => {
          this.showMyMemList = data;
          if(this.showMyMemList.length==0){
            this.loadinggif = false;
            this.nodatadialog = 'block';
            this.menu4 = false;
          }else{
            this.loadinggif = false;
            this.menu4 = true;
            if(country == "Indonesia"){
              this.indonesiaCust = false;
            }else{
              this.indonesiaCust = true;
            }
          }
      },
      error => {
          this.loadinggif = false;
          this.menu4=true;
          alert('Network issue please try again');
      }
    );
  }

  onCloseHandled(){
    this.nodatadialog = 'none';
  }

}

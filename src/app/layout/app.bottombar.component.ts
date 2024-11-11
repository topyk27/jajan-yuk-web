import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottombar',
  templateUrl: './app.bottombar.component.html',
  styles: ['.active {text-color: pink;} .non-active {}']
  
})
export class AppBottombarComponent implements OnInit {
  // constructor(public layoutService: LayoutSer)
  model: any[] = [];
  activeLink:string;
  constructor(private router:Router) {
    this.activeLink = this.router.url;
    console.log(this.activeLink);
  }
  ngOnInit(): void {
    this.model = [
      {
        label: 'Home',
        icon: '../assets/icons/home.svg',
        routerLink: ['/main'],
      },
      {
        label: 'Bookmark',
        icon: '../assets/icons/bookmark.png',
        routerLink: ['/bookmark'],
      },
      {
        label: 'Create',
        icon: '../assets/icons/plus.png',
        routerLink: ['/create'],
      },
      {
        label: 'Profile',
        icon: '../assets/icons/profile.png',
        routerLink: ['/profile'],
      },
    ];
  }

  arahkanDong(link:any) {
    console.log(typeof(link));
    console.log(link);
    this.activeLink = link;
    this.router.navigate([link]);
  }
}

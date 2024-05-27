import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router) { }

  currentPage: any = 'bio';
  menus: Array<any> = [
    { page: 'bio', title: 'Bio Page' },
    { page: 'shift', title: 'Shift Available' },
    { page: 'rate', title: 'Rate' },
  ];

  switchContent(page: string) {
    console.log('clicked');
    this.currentPage = page;
  }

  logOut(){
    this.router.navigate(['/login']);
  }
}

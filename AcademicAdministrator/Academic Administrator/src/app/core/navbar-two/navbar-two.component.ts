import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.scss']
})
export class NavbarTwoComponent implements OnInit {

  clgLogo:string='http://www.apolloarts.in/index.html'

  constructor() { }

  ngOnInit(): void {
  }

}
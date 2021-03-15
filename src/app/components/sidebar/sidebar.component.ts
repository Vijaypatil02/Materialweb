import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isMenuOpen = true;
  contentMargin = 240;

  constructor() { }

  ngOnInit(): void {
  }

  onToolbarMenuToggle(): void{
    this.isMenuOpen = !this.isMenuOpen;

    if(!this.isMenuOpen){
      this.contentMargin = 70;
    }else{
      this.contentMargin = 240;
    }
  }

}

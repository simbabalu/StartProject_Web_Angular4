import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() menuState:string = 'out';
  constructor() { }

  
  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }
 
  ngOnInit() {
  }
  scrollTop(){

    window.scroll(0,0);
     // 1-line if statement that toggles the value:
     this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

}

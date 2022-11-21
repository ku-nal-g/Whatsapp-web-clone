import { ComponentStateService } from './services/component-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isOpened: boolean = false;

  constructor(private state: ComponentStateService) { }

  ngOnInit(): void {
    this.state.selectedValue$.subscribe((res) => {
      this.isOpened = res;
    })
  }
  getHomeClass(){
    return this.isOpened ? 'small-home-div' : 'large-home-div';
  }
  getSearchClass(){
    return !this.isOpened ? 'small-search-div' : 'large-search-div';
  }
}

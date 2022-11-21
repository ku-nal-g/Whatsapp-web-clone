import { ComponentStateService } from './../../services/component-state.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  placeHolderText: string = "Search...";

  toggleIcon: boolean = true;

  constructor(private state: ComponentStateService){}

  emptyText() {
    this.placeHolderText = "";
    this.toggleIcon = !this.toggleIcon;
  }
  fillText() {
    this.placeHolderText = "Search...";
    this.toggleIcon = !this.toggleIcon;
  }
  toggleBar(){
    this.state.searchBarOpened(false);
  }

}

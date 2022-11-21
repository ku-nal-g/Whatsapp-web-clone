import { ComponentStateService } from './../../services/component-state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isClicked: boolean = true;
  userInfo: any;

  constructor(private state: ComponentStateService) { }

  ngOnInit(): void {
    this.state.msgData$.subscribe({
      next: (res) => {
        this.userInfo = res;
      }
    })
  }

  openBar() {
    this.state.searchBarOpened(this.isClicked);
  }
}

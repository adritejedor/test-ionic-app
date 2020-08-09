import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [HomeService]
})
export class HomePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  // public filter: any;

  constructor(
    public home: HomeService
  ) {

  }

  ngOnInit(): void {
    this.home.resetFilter(false);
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.home.getContent()
      if (this.home.infiniteScrollList.length == 4000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  filterChange(event) {
    this.home.resetFilter(true);
    if (event.detail.value) {
      this.home.cardContentList = this.home.cardContentList.filter((x) => (x.id == event.detail.value || x.text.includes(event.detail.value)));
      this.home.count = 0;
      this.home.infiniteScrollList = [];
      this.home.getContent();
      if (this.home.cardContentList.length < 10) {
        this.infiniteScroll.disabled = true;
      }
    } else {
      this.infiniteScroll.disabled = false;
      this.home.infiniteScrollList = [];
      this.home.count = 0;
      this.home.getContent();
    }
  }
}

import { Injectable } from '@angular/core';
import { CARD_MODEL } from 'src/app/models/card.model';
import { CardControllerService } from 'src/app/providers/card-controller.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public cardContentList: CARD_MODEL[] = [];
  public infiniteScrollList: CARD_MODEL[] = [];
  public count: number = 0;
  private resetCount: number = 0;
  private cardContentListCopy: CARD_MODEL[] = [];

  constructor(
    public card: CardControllerService
  ) { }

  resetFilter(onFilter: boolean) {
    this.cardContentList = [];
    this.card.objectGenerator().subscribe(
      (res) => {
        if (this.resetCount === 0) {
          this.cardContentListCopy = res;
          this.resetCount++;
        }
        this.cardContentList = this.cardContentListCopy;
        if (!onFilter) {
          this.getContent();
        }
      }, (err) => {
        console.log(err)
      }
    );
  }

  getContent() {
    for (let i = 0; i < 10; i++) {
      if (this.cardContentList[this.count]) {
        this.infiniteScrollList.push(this.cardContentList[this.count]);
        this.count++;
      } else {
        break;
      }
    }
  }
}

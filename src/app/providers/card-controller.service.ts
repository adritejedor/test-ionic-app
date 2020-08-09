import { Injectable } from '@angular/core';
import { CARD_MODEL } from '../models/card.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardControllerService {

  public cardList: CARD_MODEL[] = [];
  private lorenIpsum: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas turpis vitae dignissim dictum. Suspendisse nibh nibh, ultrices ac mauris nec, ullamcorper imperdiet odio. Sed interdum diam magna, non gravida diam ultrices non. Mauris ac maximus nibh, vitae feugiat tortor. Ut vulputate porttitor mattis. Duis nec dui rutrum, tempus ipsum eget, interdum tortor. Donec ac nisl ut mauris vulputate ullamcorper eget sit amet diam. Maecenas sit amet condimentum ipsum. Cras vel imperdiet blandit.';

  constructor() { }

  private randomTextGenerator(): string {
    return this.lorenIpsum.substring(Math.floor(Math.random() * 450), Math.floor(Math.random() * 50));
  }

  objectGenerator(): Observable<CARD_MODEL[]> {
    this.cardList = [];
    const items = new Observable<CARD_MODEL[]>((observer) => {
      for (let i = 0; i < 4000; i++) {
        const num = Math.floor(Math.random() * 1025);
        this.cardList.push(
          {
            id: i,
            photo: `https://www.picsum.photos/id/${num}/500/500.jpg`,
            text: this.randomTextGenerator()
          }
        );
      }
      observer.next(this.cardList);
    })
    return items;
  }
}

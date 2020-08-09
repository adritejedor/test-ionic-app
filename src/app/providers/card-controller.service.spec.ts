import { TestBed, async } from '@angular/core/testing';

import { CardControllerService } from './card-controller.service';

describe('CardControllerService', () => {
  let service: CardControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cards', async(() => {
    service.objectGenerator().subscribe(
      (res) => expect(res).not.toBeNull(),
      (err) => fail(err)
    )
  }));

  it('should get card by id', () => {
    service.objectGenerator().subscribe(
      (res) => {
        expect(res[0].id).toEqual(0);
        expect(res[432].id).toEqual(432);
      }
    )
  })
});

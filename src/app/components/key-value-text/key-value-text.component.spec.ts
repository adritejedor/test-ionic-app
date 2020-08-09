import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyValueTextComponent } from './key-value-text.component';

describe('KeyValueTextComponent', () => {
  let component: KeyValueTextComponent;
  let fixture: ComponentFixture<KeyValueTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValueTextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyValueTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

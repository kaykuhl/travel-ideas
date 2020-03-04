import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeTripPage } from './make-trip.page';

describe('MakeTripPage', () => {
  let component: MakeTripPage;
  let fixture: ComponentFixture<MakeTripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeTripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

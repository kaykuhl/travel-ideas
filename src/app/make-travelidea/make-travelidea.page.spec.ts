import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakeTravelideaPage } from './make-travelidea.page';

describe('MakeTravelideaPage', () => {
  let component: MakeTravelideaPage;
  let fixture: ComponentFixture<MakeTravelideaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeTravelideaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeTravelideaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

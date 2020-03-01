import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTravelideaPage } from './edit-travelidea.page';

describe('EditTravelideaPage', () => {
  let component: EditTravelideaPage;
  let fixture: ComponentFixture<EditTravelideaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTravelideaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTravelideaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

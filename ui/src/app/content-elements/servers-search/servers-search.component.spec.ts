import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServersSearchComponent} from './servers-search.component';
import {FormsModule} from "@angular/forms";

describe('ServersSearchComponent', () => {
  let component: ServersSearchComponent;
  let fixture: ComponentFixture<ServersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ServersSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

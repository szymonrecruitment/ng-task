import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServersTableComponent} from './servers-table.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SearchPipe} from '../../../shared/pipes/search.pipe';

describe('ServersTableComponent', () => {
  let component: ServersTableComponent;
  let fixture: ComponentFixture<ServersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ServersTableComponent, SearchPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServersActionsTooltipComponent} from './servers-actions-tooltip.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ServersActionsTooltipComponent', () => {
  let component: ServersActionsTooltipComponent;
  let fixture: ComponentFixture<ServersActionsTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ServersActionsTooltipComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersActionsTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

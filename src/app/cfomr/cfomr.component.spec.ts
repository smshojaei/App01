import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfomrComponent } from './cfomr.component';

describe('CfomrComponent', () => {
  let component: CfomrComponent;
  let fixture: ComponentFixture<CfomrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfomrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClipsComponent } from './my-clips.component';

describe('MyClipsComponent', () => {
  let component: MyClipsComponent;
  let fixture: ComponentFixture<MyClipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyClipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImguploadComponent } from './imgupload.component';

describe('ImguploadComponent', () => {
  let component: ImguploadComponent;
  let fixture: ComponentFixture<ImguploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImguploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImguploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

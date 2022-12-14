import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PopUpComponent } from './pop-up.component';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('toggles pop-up when message is set', () => {
    component.popUpService.updateCurrentMessage("Pop up");
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    let popUp = root.querySelector("#pop-up");
    expect(popUp).not.toBeNull();
    component.popUpService.updateCurrentMessage("");
    fixture.detectChanges();
    popUp = root.querySelector("#pop-up");
    expect(popUp).toBeNull();
  });

  it('should hide after 3s', fakeAsync(() => {
    component.popUpService.updateCurrentMessage("Pop up");
    fixture.detectChanges();
    const root = fixture.nativeElement as HTMLElement;
    let popUp = root.querySelector("#pop-up");
    expect(popUp).not.toBeNull();
    tick(30001)
    fixture.detectChanges();
    popUp = root.querySelector("#pop-up");
    expect(popUp).toBeNull()
  }));

});

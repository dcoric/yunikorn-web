import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDrawerContainer } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerService } from 'ngx-spinner';

import { AllocationsDrawerComponent } from './allocations-drawer.component';
import { MockNgxSpinnerService } from '@app/testing/mocks';

describe('AllocationsDrawerComponent', () => {
  let component: AllocationsDrawerComponent;
  let fixture: ComponentFixture<AllocationsDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocationsDrawerComponent, MatDrawerContainer],
      imports: [
        NoopAnimationsModule,
        MatSidenavModule,
        MatPaginatorModule,
        MatDividerModule,
        MatSortModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
      ],
      providers: [{ provide: NgxSpinnerService, useValue: MockNgxSpinnerService }],
    }).compileComponents();
    fixture = TestBed.createComponent(AllocationsDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open drawer', () => {
    spyOn(component.matDrawer, 'open');
    component.openDrawer();
    expect(component.matDrawer.open).toHaveBeenCalled();
  });

  it('should close drawer', () => {
    spyOn(component.matDrawer, 'close');
    component.closeDrawer();
    expect(component.matDrawer.close).toHaveBeenCalled();
  });

  it('should toggle allocations detail', () => {
    const initialToggleState = component.allocationsToggle;
    component.allocationsDetailToggle();
    expect(component.allocationsToggle).toBe(!initialToggleState);
  });

  it('should copy the allocations URL to clipboard', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const copyButton = debugEl.query(By.css('.copy-btn'));
    const copyButtonSpy = spyOn(component, 'copyLinkToClipboard');
    copyButton.triggerEventHandler('click', null);
    expect(copyButtonSpy).toHaveBeenCalled();
  });
});

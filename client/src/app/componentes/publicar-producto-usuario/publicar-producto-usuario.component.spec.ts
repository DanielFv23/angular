import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarProductoUsuarioComponent } from './publicar-producto-usuario.component';

describe('PublicarProductoUsuarioComponent', () => {
  let component: PublicarProductoUsuarioComponent;
  let fixture: ComponentFixture<PublicarProductoUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicarProductoUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarProductoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OptiverComponent} from './optiver.component';

describe('OptiverComponent', () => {
    let component: OptiverComponent;
    let fixture: ComponentFixture<OptiverComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OptiverComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OptiverComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

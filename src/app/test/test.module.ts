import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { testRouter } from './test.routing';
import { TestComponent } from './test/test.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(testRouter),
        HttpClientModule,
        MatSidenavModule
    ],
    declarations: [
        TestComponent,
        SidenavComponent
    ]
})
export class TestModule {}
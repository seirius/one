import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { testRouter } from './test.routing';
import { TestComponent } from './test/test.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(testRouter),
        HttpClientModule
    ],
    declarations: [
        TestComponent
    ]
})
export class TestModule {}
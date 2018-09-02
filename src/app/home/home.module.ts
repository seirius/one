import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { homeRouter } from "./home.routing";
import { HomeComponent } from "./home/home.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(homeRouter)
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}
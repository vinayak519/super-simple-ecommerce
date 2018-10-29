import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MenuComponent } from "./menu/menu.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        MenuComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ]
})

export class CoreModule{

}
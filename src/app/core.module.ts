import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { CoreRoutingModule } from "./core.routing";
import { SharedModule } from "../shared/shared.module";
import { ServerService } from "../shared/server.service";

@NgModule({
    declarations: [
        HeaderComponent,
        AboutComponent,
        HomeComponent
    ],
    imports: [        
        // Core Routing MOdule
        CoreRoutingModule,
        SharedModule
    ],
    exports: [
        HeaderComponent,
        AboutComponent,
        HomeComponent,
        CoreRoutingModule
    ],
    providers: [
        ServerService
    ]
})
export class CoreModule{}
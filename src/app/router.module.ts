import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./store/product-list/product-list.component";
import { ProductComponent } from "./store/product/product.component";
import { StoreComponent } from "./store/store.component";
import { CartComponent } from "./store/cart/cart.component";

const routes : Routes = [
    {path: 'shop', component: StoreComponent, children: [
        {path: '', component: ProductListComponent},
        {path: ':id', component: ProductComponent}
    ]},
    {path: 'cart', component: CartComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule{

}
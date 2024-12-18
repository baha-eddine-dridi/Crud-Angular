import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormComponent } from './form/form.component';
import { FromProductComponent } from './from-product/from-product.component';
import { TodoListComponent } from './ComponentsService/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EnseignantComponent,
    EtudiantComponent,
    ProductComponent,
    ProductsComponent,
    ListProductsComponent,
    FormComponent,
    FromProductComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

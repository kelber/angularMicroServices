import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StoreComponent } from "./store.component";
import { HomeComponent } from "./home/home.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";

const routes: Routes = [
    {
    path: 'str', component: StoreComponent, children: [
        {path: '', component: HomeComponent},
        {path: 'home', component: HomeComponent},
        {path: 'book-list', component: BookListComponent},
        {path: 'book-detail', component: BookDetailComponent},
         ]
    },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class StoreRoutingModule {
  }
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [StoreComponent, HomeComponent, BookListComponent, BookDetailComponent],
  imports: [ StoreRoutingModule ],
  exports: [StoreComponent, HomeComponent, BookListComponent, BookDetailComponent]
})
export class StoreModule { }

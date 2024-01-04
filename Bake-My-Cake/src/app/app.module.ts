import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from 'src/login/login.component';
import { SweetsCardComponent } from 'src/sweets-card/sweets-card.component';
import { SweetsCartComponent } from 'src/sweets-cart/sweets-cart.component';
import { SweetsListComponent } from 'src/sweets-list/sweets-list.component';
import { SweetsRequestComponent } from 'src/sweets-request/sweets-request.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/header/header.component';
import { SearchComponent } from 'src/search/search.component';


// Material Components
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SweetsCardComponent,
    SweetsCartComponent,
    SweetsListComponent,
    SweetsRequestComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,MatDatepickerModule,
    ReactiveFormsModule,MatPaginatorModule,
    MatSortModule
    // MatSort,MatTableDataSource
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

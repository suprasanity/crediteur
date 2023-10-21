import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpruntsComponent } from './emprunts/emprunts.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from '@angular/material/input';
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import { NouvelEmpruntComponent } from './emprunts/nouvel-emprunt/nouvel-emprunt.component';
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    EmpruntsComponent,
    NouvelEmpruntComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

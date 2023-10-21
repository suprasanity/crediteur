// nouvel-emprunt.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nouvel-emprunt',
  templateUrl: './nouvel-emprunt.component.html',
  styleUrls: ['./nouvel-emprunt.component.css']
})
export class NouvelEmpruntComponent implements OnInit {
  nouvelEmprunt = {
    nomEmprunteur: '',
    debit: 0,
    email: '',
    dateEmprunt: new Date()
  };

  constructor(public dialogRef: MatDialogRef<NouvelEmpruntComponent>) {}

  ngOnInit() {}

  ajouterEmprunt() {
    // You can validate the nouvelEmprunt data here if needed
    // For now, just closing the modal and passing nouvelEmprunt data
    this.dialogRef.close(this.nouvelEmprunt);
  }
}

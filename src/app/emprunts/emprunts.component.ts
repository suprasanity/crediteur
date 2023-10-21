import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Emprunt } from '../model/emprunt';
import { MatSort } from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {NouvelEmpruntComponent} from "./nouvel-emprunt/nouvel-emprunt.component";

@Component({
  selector: 'app-emprunts',
  templateUrl: './emprunts.component.html',
  styleUrls: ['./emprunts.component.css']
})
export class EmpruntsComponent implements OnInit, AfterViewInit{


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private dialog: MatDialog) {
  }

  emprunts: Emprunt[] = []

  dataSource = new MatTableDataSource(this.emprunts);

  columns = ['nomEmprunteur', 'debit', 'email', 'dateEmprunt', 'rembourse', 'dateRemboursement', 'actions'];
  ouvrirModalNouvelEmprunt() {
    const dialogRef = this.dialog.open(NouvelEmpruntComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed')
      console.log(result)
      if (result) {
        this.emprunts.push(result);
        this.dataSource.data = this.emprunts;
      }
    });
  }


  sortData(column: string) {
    this.dataSource.data = this.emprunts.sort((a, b) => {
      if (column === 'nomEmprunteur') {
        return a.nomEmprunteur.localeCompare(b.nomEmprunteur);
      }
      if (column === 'dateEmprunt') {
        return a.dateEmprunt.getTime() - b.dateEmprunt.getTime();
      }
      if (column === 'debit') {
        // Sort in descending order for "debit"
        return b.debit - a.debit;
      }
      return 0;
    });
  }

  editDateRemboursement(emprunt: any) {
    const currentDate = emprunt.dateRemboursement || new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    const yearInput = prompt(`Edit the year for ${emprunt.nomEmprunteur}:`, year);
    const monthInput = prompt(`Edit the month for ${emprunt.nomEmprunteur}:`, month);
    const dayInput = prompt(`Edit the day for ${emprunt.nomEmprunteur}:`, day);

    if (yearInput !== null && monthInput !== null && dayInput !== null) {
      const newYear = parseInt(yearInput, 10);
      const newMonth = parseInt(monthInput, 10);
      const newDay = parseInt(dayInput, 10);

      if (!isNaN(newYear) && !isNaN(newMonth) && !isNaN(newDay)) {
        const editedDate = new Date(newYear, newMonth - 1, newDay);
        emprunt.dateRemboursement = editedDate;
      } else {
        alert('Invalid date format. Please enter valid numeric values for year, month, and day.');
      }
    } else {
      alert('Edit canceled or empty input. No changes were made.');
    }
  }

  applyFilter(event: any) {
    const filterValue = event.target.value;
    const lowerCaseFilter = filterValue.toLowerCase();

    const filteredData = this.emprunts.filter(emprunt => {
      return emprunt.nomEmprunteur.toLowerCase().includes(lowerCaseFilter);
    });

    this.dataSource.data = filteredData;
  }

  ngOnInit(): void {
    // Mock data
    this.emprunts = [
      new Emprunt('John Doe', 100, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('Jane Doe', 200, 'jane.doe@example', new Date(), false, new Date()),
      new Emprunt('John Smith', 300, 'john.smith@example', new Date(), false, new Date()),
      new Emprunt('Jane Smith', 400, 'jane.smith@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date()),
      new Emprunt('John Doe', 500, 'john.doe@example', new Date(), false, new Date())
    ];

    this.dataSource.data = this.emprunts;
  }
}

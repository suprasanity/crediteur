// emprunt.model.ts

export class Emprunt {
  nomEmprunteur: string;
  debit: number;
  email: string;
  dateEmprunt: Date;
  rembourse: boolean;
  dateRemboursement: Date;

  constructor(
    nomEmprunteur: string,
    debit: number,
    email: string,
    dateEmprunt: Date,
    rembourse: boolean,
    dateRemboursement: Date
  ) {
    this.nomEmprunteur = nomEmprunteur;
    this.debit = debit;
    this.email = email;
    this.dateEmprunt = dateEmprunt;
    this.rembourse = rembourse;
    this.dateRemboursement = dateRemboursement;
  }
}

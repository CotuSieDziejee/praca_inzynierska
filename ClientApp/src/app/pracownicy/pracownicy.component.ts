import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../shared/user.service';
import { MatPaginator } from '@angular/material/paginator';


export interface Logistycy {
  id: number;
  fullName: string;
  email: string;
  userName: string;
}

export interface Kierowcy {
  id: number;
  fullName: string;
  email: string;
  userName: string;
}


@Component({
  selector: 'app-pracownicy',
  templateUrl: './pracownicy.component.html',
  styleUrls: ['./pracownicy.component.css']
})


export class PracownicyComponent implements AfterViewInit {
  public rolapracownikaLogistycy: any = {};
  public idpracownikaLogistycy: any = {};
  public imieinazwiskopracownikaLogistycy: any = {};
  public emailpracownikaLogistycy: any = {};

  public rolapracownikaKierowcy: any = {};
  public idpracownikaKierowcy: any = {};
  public imieinazwiskopracownikaKierowcy: any = {};
  public emailpracownikaKierowcy: any = {};

  AdminUsers;
  LogisticianUsers;
  DriverUsers;

  public disabledLogistycy: boolean = false;
  public idLogistycy: number = 0;
  public fullNameLogistycy: string = "Jan Kowalski";
  public emailLogistycy: string = "mail@mail.com";
  public roleLogistycy: number = 1;
  public roleNameLogistycy: string = "";

  public disabledKierowcy: boolean = false;
  public idKierowcy: number = 0;
  public fullNameKierowcy: string = "Jan Kowalski";
  public emailKierowcy: string = "mail@mail.com";
  public roleKierowcy: number = 1;
  public roleNameKierowcy: string = "";

  displayedColumnsLogistycy: string[] = ['select', 'id', 'fullName', 'email', 'userName'];
  displayedColumnsKierowcy: string[] = ['select', 'id', 'fullName', 'email', 'userName'];

  selectionLogistycy = new SelectionModel<Logistycy>(false, []);
  selectionKierowcy = new SelectionModel<Kierowcy>(false, []);

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private service: UserService) {

  }
  ngAfterViewInit() {
    this.dataSourceKierowcy.paginator = this.paginator.toArray()[1];
    this.dataSourceKierowcy.sort = this.sort.toArray()[1];

    this.dataSourceLogistycy.paginator = this.paginator.toArray()[0];
    this.dataSourceLogistycy.sort = this.sort.toArray()[0];
  }

  public dataSourceLogistycy = new MatTableDataSource<Logistycy>();
  public dataSourceKierowcy = new MatTableDataSource<Kierowcy>();

  ngOnInit() {
    this.service.getUsersLogisticians().subscribe(
      res => {
        this.dataSourceLogistycy.data = res as Logistycy[];
      },
      err => {
        console.log(err);
      },
    );
    this.service.getUsersDrivers().subscribe(
      res => {
        this.dataSourceKierowcy.data = res as Kierowcy[];
      },
      err => {
        console.log(err);
      },
    );
  }

  applyFilterLogistycy(event: Event) {
    const filterValueLogistycy = (event.target as HTMLInputElement).value;
    this.dataSourceLogistycy.filter = filterValueLogistycy.trim().toLowerCase();

    if (this.dataSourceLogistycy.paginator) {
      this.dataSourceLogistycy.paginator.firstPage();
    }
  }
  applyFilterKierowcy(event: Event) {
    const filterValueKierowcy = (event.target as HTMLInputElement).value;
    this.dataSourceKierowcy.filter = filterValueKierowcy.trim().toLowerCase();

    if (this.dataSourceKierowcy.paginator) {
      this.dataSourceKierowcy.paginator.firstPage();
    }
  }
  isAllSelectedLogistycy() {
    const numSelectedLogistycy = this.selectionLogistycy.selected.length;
    const numRowsLogistycy = this.dataSourceLogistycy.data.length;
    return numSelectedLogistycy === numRowsLogistycy;
  }
  isAllSelectedKierowcy() {
    const numSelectedKierowcy = this.selectionKierowcy.selected.length;
    const numRowsKierowcy = this.dataSourceKierowcy.data.length;
    return numSelectedKierowcy === numRowsKierowcy;
  }
  masterToggleLogistycy() {
    this.isAllSelectedLogistycy() ?
      this.selectionLogistycy.clear() :
      this.dataSourceLogistycy.data.forEach(row => this.selectionLogistycy.select(row));
  }
  masterToggleKierowcy() {
    this.isAllSelectedKierowcy() ?
      this.selectionKierowcy.clear() :
      this.dataSourceKierowcy.data.forEach(row => this.selectionKierowcy.select(row));
  }
  checkboxLabelLogistycy(row?: Logistycy): string {
    if (!row) {
      console.log(!row);
      return `${this.isAllSelectedLogistycy() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionLogistycy.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
  checkboxLabelKierowcy(row?: Kierowcy): string {
    if (!row) {
      console.log(!row);
      return `${this.isAllSelectedKierowcy() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionKierowcy.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  updateCheckedListLogistycy() {
    this.imieinazwiskopracownikaLogistycy = this.selectionLogistycy.selected.map(x => x.fullName);
    this.idpracownikaLogistycy = this.selectionLogistycy.selected.map(x => x.id);
    this.emailpracownikaLogistycy = this.selectionLogistycy.selected.map(x => x.email);

    this.fullNameLogistycy = this.imieinazwiskopracownikaLogistycy;
    this.idLogistycy = this.idpracownikaLogistycy;
    this.emailLogistycy = this.emailpracownikaLogistycy;

    this.disabledLogistycy = !this.disabledLogistycy;
  }

  updateCheckedListKierowcy() {
    this.imieinazwiskopracownikaKierowcy = this.selectionKierowcy.selected.map(x => x.fullName);
    this.idpracownikaKierowcy = this.selectionKierowcy.selected.map(x => x.id);
    this.emailpracownikaKierowcy = this.selectionKierowcy.selected.map(x => x.email);

    this.fullNameKierowcy = this.imieinazwiskopracownikaKierowcy;
    this.idKierowcy = this.idpracownikaKierowcy;
    this.emailKierowcy = this.emailpracownikaKierowcy;

    this.disabledKierowcy = !this.disabledKierowcy;
  }

  selectAllLogistycy() {
    this.isAllSelectedLogistycy() ?
      this.selectionLogistycy.clear() :
      this.dataSourceLogistycy.data.forEach(row => this.selectionLogistycy.isSelected(row));
  }

  selectAllKierowcy() {
    this.isAllSelectedKierowcy() ?
      this.selectionKierowcy.clear() :
      this.dataSourceKierowcy.data.forEach(row => this.selectionKierowcy.isSelected(row));
  }

  editLogistycy() {
    this.imieinazwiskopracownikaLogistycy = [];
    this.idpracownikaLogistycy = [];
    this.rolapracownikaLogistycy = [];


    this.disabledLogistycy = !this.disabledLogistycy;
  }

  editKierowcy() {
    this.imieinazwiskopracownikaKierowcy = [];
    this.idpracownikaKierowcy = [];
    this.rolapracownikaKierowcy = [];


    this.disabledKierowcy = !this.disabledKierowcy;
  }

}

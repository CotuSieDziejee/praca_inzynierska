import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../shared/user.service';
import { MatPaginator } from '@angular/material/paginator';

export interface Kierowcy {
  id: number;
  fullName: string;
  email: string;
}


@Component({
  selector: 'app-kierowcy-generator',
  templateUrl: './kierowcy-generator.component.html',
  styleUrls: ['./kierowcy-generator.component.css']
})
export class KierowcyGeneratorComponent implements AfterViewInit {

  public rolapracownikaKierowcy: any = {};
  public idpracownikaKierowcy: any = {};
  public imieinazwiskopracownikaKierowcy: any = {};
  public emailpracownikaKierowcy: any = {};

  AdminUsers;
  LogisticianUsers;
  DriverUsers;

  public disabledKierowcy: boolean = false;
  public idKierowcy: number = 0;
  public fullNameKierowcy: string = "Jan Kowalski";
  public emailKierowcy: string = "mail@mail.com";
  public roleKierowcy: number = 1;
  public roleNameKierowcy: string = "";

  displayedColumnsKierowcy: string[] = ['select', 'id', 'fullName', 'email'];

  selectionKierowcy = new SelectionModel<Kierowcy>(true, []);

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();

  constructor(private service: UserService) {

  }
  ngAfterViewInit() {
    this.dataSourceKierowcy.paginator = this.paginator.toArray()[0];
    this.dataSourceKierowcy.sort = this.sort.toArray()[0];

  }

  public dataSourceKierowcy = new MatTableDataSource<Kierowcy>();

  ngOnInit() {
    this.service.getUsersDrivers().subscribe(
      res => {
        this.dataSourceKierowcy.data = res as Kierowcy[];
      },
      err => {
        console.log(err);
      },
    );
  }
  applyFilterKierowcy(event: Event) {
    const filterValueKierowcy = (event.target as HTMLInputElement).value;
    this.dataSourceKierowcy.filter = filterValueKierowcy.trim().toLowerCase();

    if (this.dataSourceKierowcy.paginator) {
      this.dataSourceKierowcy.paginator.firstPage();
    }
  }

  isAllSelectedKierowcy() {
    const numSelectedKierowcy = this.selectionKierowcy.selected.length;
    const numRowsKierowcy = this.dataSourceKierowcy.data.length;
    return numSelectedKierowcy === numRowsKierowcy;
  }

  masterToggleKierowcy() {
    this.isAllSelectedKierowcy() ?
      this.selectionKierowcy.clear() :
      this.dataSourceKierowcy.data.forEach(row => this.selectionKierowcy.select(row));
  }

  checkboxLabelKierowcy(row?: Kierowcy): string {
    if (!row) {
      console.log(!row);
      return `${this.isAllSelectedKierowcy() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionKierowcy.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
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

  selectAllKierowcy() {
    this.isAllSelectedKierowcy() ?
      this.selectionKierowcy.clear() :
      this.dataSourceKierowcy.data.forEach(row => this.selectionKierowcy.isSelected(row));
  }


  editKierowcy() {
    this.imieinazwiskopracownikaKierowcy = [];
    this.idpracownikaKierowcy = [];
    this.rolapracownikaKierowcy = [];


    this.disabledKierowcy = !this.disabledKierowcy;
  }
}



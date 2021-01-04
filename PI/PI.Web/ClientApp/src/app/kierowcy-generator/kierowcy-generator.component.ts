import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

export interface Pracownicy {
  id: number;
  imie: string;
  nazwisko: string;
}


const WORKERS_DATA: Pracownicy[] = [
  { id: 1, imie: 'Hydrogen', nazwisko: 'H' },
  { id: 2, imie: 'Helium', nazwisko: 'He' },
  { id: 3, imie: 'Lithium', nazwisko: 'Li' },
  { id: 4, imie: 'Beryllium', nazwisko: 'Be' },
  { id: 5, imie: 'Boron', nazwisko: 'B' },
  { id: 6, imie: 'Carbon', nazwisko: 'C' },
  { id: 7, imie: 'Nitrogen', nazwisko: 'N' },
  { id: 8, imie: 'Oxygen', nazwisko: 'O' },
  { id: 9, imie: 'Fluorine', nazwisko: 'F' },
  { id: 10, imie: 'Neon', nazwisko: 'Ne' },
];

@Component({
  selector: 'app-kierowcy-generator',
  templateUrl: './kierowcy-generator.component.html',
  styleUrls: ['./kierowcy-generator.component.css']
})
export class KierowcyGeneratorComponent implements AfterViewInit {
  displayedColumns: string[] = ['select', 'id', 'imie', 'nazwisko'];
  dataSource: MatTableDataSource<Pracownicy>;
  selection = new SelectionModel<Pracownicy>(true, []);

  @ViewChild(MatPaginator, { static: false }) paginator
  @ViewChild(MatSort, { static: false }) sort

  constructor() {

    this.dataSource = new MatTableDataSource<Pracownicy>(WORKERS_DATA);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: Pracownicy): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}

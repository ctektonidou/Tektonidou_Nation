import { Component, OnInit, ViewChild } from '@angular/core';
import { Countries } from '../countries';
import { CountriesService } from '../countries.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countries: Countries[] = [];

  public displayedColumns: Array<string> = [];
  public displayedColumnProps: Array<Array<any>> = [[], [], []];
  public displayedColumnLookupInfo: Array<any> = [];
  public highlightedRow = null;
  protected paginator: any = null;
  public dataSource: MatTableDataSource<any[]> = new MatTableDataSource<any[]>(
    []
  );
  public dataSourceSpecial = new MatTableDataSource();
  @ViewChild('paginatorStatus') paginatorStatus: MatPaginatorModule | any =
    null;

  countriesArray: any = [
    {
      country_id: 1,
      name: 'Aruba',
      area: '193.00',
      national_date: null,
      country_code2: 'AW',
      country_code3: 'ABW',
      region_id: 1,
    },
    {
      country_id: 2,
      name: 'Afghanistan',
      area: '652090.00',
      national_date: '1919-08-19',
      country_code2: 'AF',
      country_code3: 'AFG',
      region_id: 2,
    },
    {
      country_id: 3,
      name: 'Angola',
      area: '1246700.00',
      national_date: '1975-11-11',
      country_code2: 'AO',
      country_code3: 'AGO',
      region_id: 3,
    },
    {
      country_id: 4,
      name: 'Anguilla',
      area: '96.00',
      national_date: '1967-05-30',
      country_code2: 'AI',
      country_code3: 'AIA',
      region_id: 1,
    },
    {
      country_id: 5,
      name: 'Albania',
      area: '28748.00',
      national_date: '1912-11-28',
      country_code2: 'AL',
      country_code3: 'ALB',
      region_id: 4,
    },
    {
      country_id: 6,
      name: 'Andorra',
      area: '1468.00',
      national_date: null,
      country_code2: 'AD',
      country_code3: 'AND',
      region_id: 4,
    },
    {
      country_id: 5,
      name: 'Albania',
      area: '28748.00',
      national_date: '1912-11-28',
      country_code2: 'AL',
      country_code3: 'ALB',
      region_id: 4,
    },
    {
      country_id: 6,
      name: 'Andorra',
      area: '1468.00',
      national_date: null,
      country_code2: 'AD',
      country_code3: 'AND',
      region_id: 4,
    },
    {
      country_id: 5,
      name: 'Albania',
      area: '28748.00',
      national_date: '1912-11-28',
      country_code2: 'AL',
      country_code3: 'ALB',
      region_id: 4,
    },
    {
      country_id: 6,
      name: 'Andorra',
      area: '1468.00',
      national_date: null,
      country_code2: 'AD',
      country_code3: 'AND',
      region_id: 4,
    },
    {
      country_id: 5,
      name: 'Albania',
      area: '28748.00',
      national_date: '1912-11-28',
      country_code2: 'AL',
      country_code3: 'ALB',
      region_id: 4,
    },
    {
      country_id: 6,
      name: 'Andorra',
      area: '1468.00',
      national_date: null,
      country_code2: 'AD',
      country_code3: 'AND',
      region_id: 4,
    },
  ];
  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {
    this.displayedColumns = ['name', 'area', 'country_code2'];
    this.displayedColumnProps[0] = ['ΟΝΟΜΑ ΧΩΡΑΣ', 'AREA', 'ΚΩΔΙΚΟΣ ΧΩΡΑΣ'];
    this.displayedColumnProps[1] = ['string', 'string', 'string'];
  }

  @ViewChild(MatPaginator, { static: false }) set _paginator(pg: MatPaginator) {
    if (pg) {
      this.paginator = pg;
    }
  }

  ngOnInit(): void {
    // this.countriesService.getCountries().subscribe((e: Countries[]) => {
    //   this.countries = e;
    // });
    this.dataSource = new MatTableDataSource(this.countriesArray);
    setTimeout(() => {
      this.afterLoadData();
    }, 500);
  }

  afterLoadData() {
    this.dataSource.paginator = this.paginator;
  }

  masterRowClick(row: any) {
    this.router.navigate(['countries', row.country_id]);
  }
}

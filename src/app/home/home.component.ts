import { Component, OnInit, ViewChild } from '@angular/core';
import { Countries } from '../countries';
import { CountriesService } from '../countries.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isSpinnerVisible: boolean = false;

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

  popArray: any = [];

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

  populationArray: any = [
    { country_id: 1, year: 1986, population: 62644, gdp: 405463417 },
    { country_id: 1, year: 1987, population: 61833, gdp: 487602457 },
    { country_id: 1, year: 1988, population: 61079, gdp: 596423607 },
    { country_id: 2, year: 1961, population: 9169410, gdp: 548888895 },
    { country_id: 2, year: 1962, population: 9351441, gdp: 546666677 },
    { country_id: 2, year: 1963, population: 9543205, gdp: 751111191 },
    { country_id: 2, year: 1964, population: 9744781, gdp: 800000044 },
    { country_id: 3, year: 1986, population: 8341289, gdp: 5930503401 },
    { country_id: 3, year: 1986, population: 8640446, gdp: 5550483036 },
    { country_id: 3, year: 1986, population: 8952950, gdp: 5550483036 },
  ];

  constructor(
    private countriesService: CountriesService,
    private router: Router
  ) {
    this.displayedColumns = [
      'name',
      'country_code3',
      'year',
      'population',
      'gdr',
    ];
    this.displayedColumnProps[0] = [
      'ΟΝΟΜΑ ΧΩΡΑΣ',
      'ΚΩΔΙΚΟΣ ΧΩΡΑΣ',
      'ΕΤΟΣ',
      'ΠΛΗΘΥΣΜΟΣ',
      'GDP',
    ];
    this.displayedColumnProps[1] = [
      'string',
      'string',
      'string',
      'string',
      'string',
    ];
  }

  @ViewChild(MatPaginator, { static: false }) set _paginator(pg: MatPaginator) {
    if (pg) {
      this.paginator = pg;
    }
  }

  ngOnInit(): void {
    // this.countriesService.getPopulation().subscribe((e: Countries[]) => {
    //   this.populationArray = e;
    // });
    let country1: any = { gdp: 0 };
    let maxCountry1: any = {};
    let country2: any = {};
    let maxCountry2: any = {};
    let country3: any = {};
    let maxCountry3: any = {};
    for (let i in this.populationArray) {
      if (this.populationArray[i].country_id == 1) {
        if (country1.gdp >= this.populationArray[i].gdp) {
          maxCountry1 = country1;
          this.popArray.push(maxCountry1);
        }
        country1 = this.populationArray[i];
      }
      if (this.populationArray[i].country_id == 2) {
        if (country2.gdp > this.populationArray[i].gdp) {
          maxCountry2 = country2;
          this.popArray.push(maxCountry2);
        }
        country2 = this.populationArray[i];
      }
      if (this.populationArray[i].country_id == 3) {
        if (country3.gdp > this.populationArray[i].gdp) {
          maxCountry3 = country3;
          this.popArray.push(maxCountry3);
        }
        country3 = this.populationArray[i];
      }
    }
    this.dataSource = new MatTableDataSource(this.popArray);
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

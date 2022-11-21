import { Component, OnInit, ViewChild } from '@angular/core';
import { Countries } from '../../countries';
import { CountriesService } from '../../countries.service';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countries: Countries[] = [];
  langSpokenArray: any = [];
  langCountry: any = [];
  country_name: any = {};

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
  public paramId: string = '';

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

  country_languages: any = [
    { country_id: 1, language_id: 1, official: 1 },
    { country_id: 1, language_id: 2, official: 0 },
    { country_id: 1, language_id: 0, official: 1 },
    { country_id: 2, language_id: 5, official: 0 },
    { country_id: 2, language_id: 6, official: 1 },
    { country_id: 2, language_id: 7, official: 1 },
    { country_id: 2, language_id: 8, official: 0 },
    { country_id: 2, language_id: 9, official: 0 },
    { country_id: 3, language_id: 10, official: 0 },
    { country_id: 3, language_id: 11, official: 0 },
    { country_id: 3, language_id: 12, official: 0 },
    { country_id: 3, language_id: 13, official: 0 },
    { country_id: 3, language_id: 14, official: 0 },
    { country_id: 3, language_id: 15, official: 0 },
    { country_id: 3, language_id: 16, official: 0 },
    { country_id: 3, language_id: 17, official: 0 },
    { country_id: 3, language_id: 18, official: 0 },
    { country_id: 4, language_id: 2, official: 1 },
    { country_id: 5, language_id: 19, official: 1 },
    { country_id: 5, language_id: 20, official: 0 },
    { country_id: 5, language_id: 21, official: 0 },
    { country_id: 6, language_id: 4, official: 0 },
    { country_id: 6, language_id: 2, official: 1 },
    { country_id: 6, language_id: 23, official: 0 },
    { country_id: 6, language_id: 24, official: 0 },
  ];

  languages: any = [
    { language_id: 1, language: 'Dutch' },
    { language_id: 2, language: 'English' },
    { language_id: 3, language: 'Papiamento' },
    { language_id: 4, language: 'Spanish' },
    { language_id: 5, language: 'Balochi' },
    { language_id: 6, language: 'Dari' },
    { language_id: 7, language: 'Pashto' },
    { language_id: 8, language: 'Turkmenian' },
    { language_id: 9, language: 'Uzbek' },
    { language_id: 10, language: 'Ambo' },
    { language_id: 11, language: 'Chokwe' },
    { language_id: 12, language: 'Kongo' },
    { language_id: 13, language: 'Luchazi' },
    { language_id: 14, language: 'Luimbe-nganguela' },
    { language_id: 15, language: 'Luvale' },
    { language_id: 16, language: 'Mbundu' },
    { language_id: 17, language: 'Nyaneka-nkhumbi' },
    { language_id: 18, language: 'Ovimbundu' },
    { language_id: 19, language: 'Albaniana' },
    { language_id: 20, language: 'Greek' },
    { language_id: 21, language: 'Macedonian' },
    { language_id: 22, language: 'Catalan' },
    { language_id: 23, language: 'French' },
    { language_id: 24, language: 'Portuguese' },
  ];

  constructor(
    private countriesService: CountriesService,
    public routeParams: ActivatedRoute
  ) {
    this.displayedColumns = ['name', 'area', 'country_code2'];
    this.displayedColumnProps[0] = ['ΟΝΟΜΑ ΧΩΡΑΣ', 'AREA', 'ΚΩΔΙΚΟΣ ΧΩΡΑΣ'];
    this.displayedColumnProps[1] = ['string', 'string', 'string'];
  }

  ngOnInit(): void {
    this.routeParams.paramMap.subscribe((params: any) => {
      this.paramId = params.get('id');
    });
    //If connection with java was succeded this command wound not be in comments. Only this would have been active
    // this.countriesService.getLanguagesSpoken(this.paramId).subscribe((e: Countries[]) => {
    //   this.langSpokenArray = e;
    // });
    this.langCountry = this.country_languages.filter(
      (e: any) => e.country_id == this.paramId
    );
    this.country_name = this.countriesArray.find(
      (e: any) => e.country_id == this.paramId
    );
    for (let i in this.langCountry) {
      this.langSpokenArray.push(
        this.languages.find(
          (e: any) => e.language_id == this.langCountry[i].language_id
        )
      );
    }
  }

  masterRowClick(row: any) {
    this.highlightedRow = row;
  }
}

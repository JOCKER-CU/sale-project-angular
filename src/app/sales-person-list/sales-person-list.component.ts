import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Han", " Naung Soe", "hannaungsoe22@gmail.com",2000),
    new SalesPerson("Zaw", " Naing Oo", "zawnaingoo22@gmail.com",3000),
    new SalesPerson("James", " Bond", "jamesbond22@gmail.com",4000),
    new SalesPerson("Kaung", " Kaung", "kaungkaung22@gmail.com",5000),
  ]
}

import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatos', 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeIngridients(changedIngridient) {
    const index = this.ingridients.findIndex((el) => el.name === changedIngridient.name);
    console.log(index);

    if (index === -1) {
      if (changedIngridient.amount <= 0) return;

      this.ingridients.push(new Ingridient(changedIngridient.name, changedIngridient.amount));

      return;
    }

    if (this.ingridients[index].amount + changedIngridient.amount <= 0) {
      this.ingridients.splice(index, 1);

      return;
    }

    this.ingridients[index].amount += changedIngridient.amount;
  }

  clear() {
    this.ingridients = [];
  }
}

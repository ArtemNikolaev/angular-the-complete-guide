import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addIngridient = new EventEmitter<{name:string, amount: number}>();
  @Output() clearIngridients = new EventEmitter<void>();
  @ViewChild('nameInput', {static:true}) name: ElementRef;
  @ViewChild('amountInput', {static:true}) amount: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  addIngredients() {
    this.addIngridient.emit({
      name: this.name.nativeElement.value,
      amount: Number(this.amount.nativeElement.value),
    })
  }

  deleteIngredients() {
    this.addIngridient.emit({
      name: this.name.nativeElement.value,
      amount: -Number(this.amount.nativeElement.value),
    })
  }

  clear() {
    this.clearIngridients.emit();
  }
}

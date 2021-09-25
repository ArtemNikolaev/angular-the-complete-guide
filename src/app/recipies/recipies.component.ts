import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  showedRecipe: RecipeService;

  constructor() { }

  ngOnInit(): void {
  }

  showRecipeInfo(recipe) {
    this.showedRecipe = recipe;
  }
}

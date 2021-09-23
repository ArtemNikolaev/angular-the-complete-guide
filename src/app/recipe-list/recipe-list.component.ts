import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeService[] = [
    new RecipeService('A Test Recipe', 'This is simply a test', 'https://realfood.tesco.com/media/images/RFO-LargeHero-1400x919-ChorizoChicken-mini-dc9a0314-51b5-4ae5-a8e8-77b8dee768e6-0-1400x920.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

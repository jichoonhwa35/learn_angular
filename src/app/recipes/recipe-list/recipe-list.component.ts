import {Component, EventEmitter, OnInit,Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe description',
      'https://image.shutterstock.com/image-photo/delicious-egg-curry-dish-asian-450w-521286064.jpg'),
    new Recipe('Another Test Recipe', 'This is a test recipe description',
      'https://image.shutterstock.com/image-photo/delicious-egg-curry-dish-asian-450w-521286064.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

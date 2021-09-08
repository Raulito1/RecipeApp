import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]= [
    new Recipe('Test Name', 'Test Description','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7QCcOwqOwMPbBpgcUhc6KJ8Zjv0YAjJNL7w&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

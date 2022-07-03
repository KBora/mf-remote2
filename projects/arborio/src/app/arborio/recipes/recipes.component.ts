import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../../services/cat-facts.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  catFacts$ = this.catFactsService.getCatFacts();

  constructor(private catFactsService: CatFactsService) { }

  ngOnInit(): void {
  }

}

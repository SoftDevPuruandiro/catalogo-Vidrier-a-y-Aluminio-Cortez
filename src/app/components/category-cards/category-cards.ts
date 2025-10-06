import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-cards',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-cards.html',
  styleUrls: ['./category-cards.scss']
})
export class CategoryCards {
  categories: Category[] = [
    {
      id: 'balones',
      name: 'Mini Balones',
      image: '/categories/balones.jpeg'
    },
    {
      id: 'electronica',
      name: 'Electrónica',
      image: '/categories/electronica.webp'
    },
    {
      id: 'anime',
      name: 'Anime',
      image: '/categories/anime.jpeg'
    }
  ];
}

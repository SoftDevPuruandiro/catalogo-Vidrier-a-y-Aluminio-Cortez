import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Interfaz local para consistencia
interface Category {
  id: string;
  name: string;
  image: string;
}

@Component({
  selector: 'app-category-cards',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './category-cards.html',
  styleUrls: ['./category-cards.scss']
})
export class CategoryCards {
  categories: Category[] = [
    { id: 'puertas', name: 'Puertas', image: '/categories/puertas.jpg' },
    { id: 'ventanas', name: 'Ventanas', image: '/categories/ventanas.webp' },
    { id: 'canceles', name: 'Canceles', image: '/categories/canceles.webp' },
    // { id: 'balones', name: 'Balones', image: '/categories/baklones.jpg' } // Ejemplo extra
  ];
}
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
    { id: 'puertas', name: 'Puertas', image: '/categories/puertas.webp' },
    { id: 'puertas_banos', name: 'Puertas para baño', image: '/categories/puertas_banos.webp' },
    { id: 'puertas_corredizas', name: 'Puertas corredizas', image: '/categories/puertas_corredizas.webp' },
    { id: 'ventanas', name: 'Ventanas', image: '/categories/ventanas.webp' },
    { id: 'ventanas_banos', name: 'Ventanas para baño', image: '/categories/ventanas_banos.webp' },
    { id: 'canceleria', name: 'Cancelería', image: '/categories/canceleria.webp' },
    { id: 'canceleria_banos', name: 'Cancelería para baño', image: '/categories/canceleria_bano.webp' },
    { id: 'barandales', name: 'Barandales', image: '/categories/barandales.webp' },
  ];
}
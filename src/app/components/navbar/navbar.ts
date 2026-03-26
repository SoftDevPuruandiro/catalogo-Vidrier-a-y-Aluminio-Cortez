import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {
  categories: Category[] = [
    { id: 'puertas', name: 'Puertas', image: '' },
    { id: 'puertas_banos', name: 'Puertas para baño', image: '' },
    { id: 'puertas_corredizas', name: 'Puertas corredizas', image: '' },
    { id: 'ventanas', name: 'Ventanas', image: '' },
    { id: 'ventanas_banos', name: 'Ventanas para baño', image: '' },
    { id: 'canceleria', name: 'Cancelería', image: '' },
    { id: 'canceleria_banos', name: 'Cancelería para baño', image: '' },
    { id: 'barandales', name: 'Barandales', image: '' },
    { id: 'vitrinas', name: 'Vitrinas', image: '' },
    // { id: '', name: '', image: '' },
    // { id: '', name: '', image: '' },
    // { id: '', name: '', image: '' },
    // { id: '', name: '', image: '' },
    // { id: '', name: '', image: '' },
  ];

  onCategoryClick(navbarNav: HTMLElement) {
    navbarNav.classList.remove('show');

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

}

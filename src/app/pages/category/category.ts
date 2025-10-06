import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../footer/footer";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './category.html',
  styleUrls: ['./category.scss']
})
export class Category {
  categoryId: string = '';
  products: Product[] = [];

  allProducts: Product[] = [
    { id: '1', name: 'Balon Adidas B/N', price: '250', image: 'products/balones/a1.jpeg', categoryId: 'balones' },
    { id: '2', name: 'Balon Adidas Champpions League F Munich', price: '350', image: 'products/balones/a2.jpeg', categoryId: 'balones' },
    { id: '3', name: 'Balon Adidas Match Ball Rojo', price: '350', image: 'products/balones/a3.jpeg', categoryId: 'balones' },
    { id: '4', name: 'Audifonos Lenovo GM2PRO', price: '250', image: '/products/electronica/lenovo.webp', categoryId: 'electronica' },
    { id: '5', name: 'Figura de anime 1', price: '0', image: '/products/anime/an1.jpeg', categoryId: 'anime' },
    { id: '6', name: 'Figura de anime 2', price: '0', image: '/products/anime/an2.jpeg', categoryId: 'anime' },
    { id: '7', name: 'Figura de anime 3', price: '0', image: '/products/anime/an3.jpeg', categoryId: 'anime' },
    { id: '8', name: 'Figura de anime 4', price: '0', image: '/products/anime/an4.jpeg', categoryId: 'anime' },
    { id: '9', name: 'Figura de anime 5', price: '0', image: '/products/anime/an5.jpeg', categoryId: 'anime' },
    { id: '10', name: 'Figura de anime 6', price: '0', image: '/products/anime/an6.jpeg', categoryId: 'anime' },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      console.log(this.categoryId)
      this.products = this.allProducts.filter(p => p.categoryId === this.categoryId);
    });
  }
}

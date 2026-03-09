import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../footer/footer";

interface Product {
  id: string;
  name: string;
  price: string;
  images: string[];
  categoryId: string;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './category.html',
  styleUrls: ['./category.scss']
})
export class Category implements OnInit {
  categoryId: string = '';
  products: Product[] = [];

  // Estructura según tus indicaciones exactas:
  allProducts: Product[] = [
    // --- PUERTAS: 8 carpetas, la 5 tiene 2 imágenes ---
    { id: '1', name: 'Puerta 1', price: '0', images: ['/products/puertas/1/1.webp'], categoryId: 'puertas' },
    { id: '2', name: 'Puerta 2', price: '0', images: ['/products/puertas/2/1.webp'], categoryId: 'puertas' },
    { id: '3', name: 'Puerta 3', price: '0', images: ['/products/puertas/3/1.webp'], categoryId: 'puertas' },
    { id: '4', name: 'Puerta 4', price: '0', images: ['/products/puertas/4/1.webp'], categoryId: 'puertas' },
    { id: '5', name: 'Puerta 5', price: '0', images: ['/products/puertas/5/1.webp', '/products/puertas/5/2.webp'], categoryId: 'puertas' },
    { id: '6', name: 'Puerta 6', price: '0', images: ['/products/puertas/6/1.webp'], categoryId: 'puertas' },
    { id: '7', name: 'Puerta 7', price: '0', images: ['/products/puertas/7/1.webp'], categoryId: 'puertas' },
    { id: '8', name: 'Puerta 8', price: '0', images: ['/products/puertas/8/1.webp'], categoryId: 'puertas' },

    // --- VENTANAS: 6 carpetas, 1 imagen cada una ---
    { id: '1', name: 'Ventana 1', price: '0', images: ['/products/ventanas/1/1.webp'], categoryId: 'ventanas' },
    { id: '2', name: 'Ventana 2', price: '0', images: ['/products/ventanas/2/1.webp'], categoryId: 'ventanas' },
    { id: '3', name: 'Ventana 3', price: '0', images: ['/products/ventanas/3/1.webp'], categoryId: 'ventanas' },
    { id: '4', name: 'Ventana 4', price: '0', images: ['/products/ventanas/4/1.webp'], categoryId: 'ventanas' },
    { id: '5', name: 'Ventana 5', price: '0', images: ['/products/ventanas/5/1.webp'], categoryId: 'ventanas' },
    { id: '6', name: 'Ventana 6', price: '0', images: ['/products/ventanas/6/1.webp'], categoryId: 'ventanas' },

    // --- CANCELES: Carpeta 1 con 2 imágenes ---
    { id: '1', name: 'Cancel 1', price: '0', images: ['/products/canceles/1/1.webp', '/products/canceles/1/2.webp'], categoryId: 'canceles' },
    
    // --- DOMOS ---
    // { id: '1', name: 'Domo 1', price: '1500', images: ['/products/domos/1/1.webp'], categoryId: 'domos' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.products = this.allProducts.filter(p => p.categoryId === this.categoryId);
    });
  }
}
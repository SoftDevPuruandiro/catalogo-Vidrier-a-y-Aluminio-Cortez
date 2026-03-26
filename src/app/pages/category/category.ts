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
  category: string = '';
  products: Product[] = [];

  // Ahora guardamos el producto seleccionado para el modal
  selectedProduct: Product | null = null;

  allProducts: Product[] = [
    { id: '1', name: 'Barandal de cristal', price: '0', images: ['/products/barandales/1/2.webp', '/products/barandales/1/1.webp'], categoryId: 'barandales' },
    { id: '2', name: 'Barandal de cristal', price: '0', images: ['/products/barandales/2/1.webp'], categoryId: 'barandales' },

    { id: '3', name: 'Cancelería', price: '0', images: ['/products/canceleria/1/1.webp'], categoryId: 'canceleria' },
    { id: '4', name: 'Cancelería', price: '0', images: ['/products/canceleria/2/1.webp'], categoryId: 'canceleria' },
    { id: '5', name: 'Cancelería', price: '0', images: ['/products/canceleria/3/1.webp'], categoryId: 'canceleria' },

    { id: '9', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/4/1.webp'], categoryId: 'canceleria_banos' },
    { id: '10', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/5/1.webp'], categoryId: 'canceleria_banos' },
    { id: '11', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/6/1.webp'], categoryId: 'canceleria_banos' },
    { id: '6', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/1/1.webp'], categoryId: 'canceleria_banos' },
    { id: '7', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/2/1.webp', '/products/canceles banos/2/2.webp'], categoryId: 'canceleria_banos' },
    { id: '8', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/3/1.webp'], categoryId: 'canceleria_banos' },
    { id: '12', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/7/1.webp'], categoryId: 'canceleria_banos' },
    { id: '13', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/8/1.webp'], categoryId: 'canceleria_banos' },
    { id: '14', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/9/1.webp'], categoryId: 'canceleria_banos' },
    { id: '15', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/10/1.webp'], categoryId: 'canceleria_banos' },
    { id: '16', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/11/1.webp', '/products/canceles banos/11/2.webp'], categoryId: 'canceleria_banos' },
    { id: '17', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/12/1.webp', '/products/canceles banos/12/2.webp', '/products/canceles banos/12/3.webp'], categoryId: 'canceleria_banos' },
    { id: '18', name: 'Cancelería baños', price: '0', images: ['/products/canceles banos/13/1.webp'], categoryId: 'canceleria_banos' },


    { id: '30', name: 'Puertas', price: '0', images: ['/products/puertas/12/1.webp'], categoryId: 'puertas' },
    { id: '31', name: 'Puertas', price: '0', images: ['/products/puertas/13/1.webp'], categoryId: 'puertas' },
    { id: '32', name: 'Puertas', price: '0', images: ['/products/puertas/14/1.webp'], categoryId: 'puertas' },
    { id: '26', name: 'Puertas', price: '0', images: ['/products/puertas/8/1.webp'], categoryId: 'puertas' },
    { id: '27', name: 'Puertas', price: '0', images: ['/products/puertas/9/1.webp'], categoryId: 'puertas' },
    { id: '28', name: 'Puertas', price: '0', images: ['/products/puertas/10/1.webp'], categoryId: 'puertas' },
    { id: '19', name: 'Puertas', price: '0', images: ['/products/puertas/1/1.webp'], categoryId: 'puertas' },
    { id: '20', name: 'Puertas', price: '0', images: ['/products/puertas/2/1.webp'], categoryId: 'puertas' },
    { id: '21', name: 'Puertas', price: '0', images: ['/products/puertas/3/1.webp'], categoryId: 'puertas' },
    { id: '22', name: 'Puertas', price: '0', images: ['/products/puertas/4/1.webp'], categoryId: 'puertas' },
    { id: '23', name: 'Puertas', price: '0', images: ['/products/puertas/5/1.webp'], categoryId: 'puertas' },
    { id: '24', name: 'Puertas', price: '0', images: ['/products/puertas/6/1.webp'], categoryId: 'puertas' },
    { id: '25', name: 'Puertas', price: '0', images: ['/products/puertas/7/1.webp', '/products/puertas/7/2.webp'], categoryId: 'puertas' },
    { id: '33', name: 'Puertas', price: '0', images: ['/products/puertas/15/1.webp'], categoryId: 'puertas' },
    { id: '34', name: 'Puertas', price: '0', images: ['/products/puertas/16/1.webp'], categoryId: 'puertas' },
    { id: '35', name: 'Puertas', price: '0', images: ['/products/puertas/17/1.webp'], categoryId: 'puertas' },
    { id: '36', name: 'Puertas', price: '0', images: ['/products/puertas/18/1.webp'], categoryId: 'puertas' },
    { id: '37', name: 'Puertas', price: '0', images: ['/products/puertas/19/1.webp'], categoryId: 'puertas' },
    { id: '38', name: 'Puertas', price: '0', images: ['/products/puertas/20/1.webp'], categoryId: 'puertas' },
    { id: '39', name: 'Puertas', price: '0', images: ['/products/puertas/21/1.webp'], categoryId: 'puertas' },
    // { id: '40', name: 'Puertas', price: '0', images: ['/products/puertas/22/1.webp'], categoryId: 'puertas' },

    { id: '41', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/1/1.webp'], categoryId: 'puertas_banos' },
    { id: '42', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/2/1.webp'], categoryId: 'puertas_banos' },
    { id: '43', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/3/1.webp'], categoryId: 'puertas_banos' },
    { id: '44', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/4/1.webp'], categoryId: 'puertas_banos' },
    { id: '45', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/5/1.webp'], categoryId: 'puertas_banos' },
    { id: '46', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/6/1.webp'], categoryId: 'puertas_banos' },
    { id: '47', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/7/1.webp'], categoryId: 'puertas_banos' },
    { id: '48', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/8/1.webp'], categoryId: 'puertas_banos' },
    { id: '49', name: 'Puertas baños', price: '0', images: ['/products/puertas banos/9/1.webp'], categoryId: 'puertas_banos' },

    { id: '50', name: 'Puertas corredizas', price: '0', images: ['/products/puertas corredizas/1/1.webp'], categoryId: 'puertas_corredizas' },
    { id: '51', name: 'Puertas corredizas', price: '0', images: ['/products/puertas corredizas/2/1.webp'], categoryId: 'puertas_corredizas' },
    { id: '52', name: 'Puertas corredizas', price: '0', images: ['/products/puertas corredizas/3/1.webp'], categoryId: 'puertas_corredizas' },
    { id: '53', name: 'Puertas corredizas', price: '0', images: ['/products/puertas corredizas/4/1.webp'], categoryId: 'puertas_corredizas' },

    { id: '57', name: 'Ventanas', price: '0', images: ['/products/ventanas/4/1.webp'], categoryId: 'ventanas' },
    { id: '58', name: 'Ventanas', price: '0', images: ['/products/ventanas/5/1.webp'], categoryId: 'ventanas' },
    { id: '59', name: 'Ventanas', price: '0', images: ['/products/ventanas/6/1.webp'], categoryId: 'ventanas' },
    { id: '60', name: 'Ventanas', price: '0', images: ['/products/ventanas/7/1.webp', '/products/ventanas/7/2.webp'], categoryId: 'ventanas' },
    { id: '61', name: 'Ventanas', price: '0', images: ['/products/ventanas/8/1.webp'], categoryId: 'ventanas' },
    { id: '62', name: 'Ventanas', price: '0', images: ['/products/ventanas/9/1.webp'], categoryId: 'ventanas' },
    { id: '54', name: 'Ventanas', price: '0', images: ['/products/ventanas/1/1.webp'], categoryId: 'ventanas' },
    { id: '55', name: 'Ventanas', price: '0', images: ['/products/ventanas/2/1.webp'], categoryId: 'ventanas' },
    { id: '56', name: 'Ventanas', price: '0', images: ['/products/ventanas/3/1.webp'], categoryId: 'ventanas' },
    { id: '63', name: 'Ventanas', price: '0', images: ['/products/ventanas/10/1.webp'], categoryId: 'ventanas' },
    { id: '64', name: 'Ventanas', price: '0', images: ['/products/ventanas/11/1.webp'], categoryId: 'ventanas' },
    { id: '65', name: 'Ventanas', price: '0', images: ['/products/ventanas/12/1.webp'], categoryId: 'ventanas' },
    { id: '66', name: 'Ventanas', price: '0', images: ['/products/ventanas/13/1.webp'], categoryId: 'ventanas' },
    { id: '67', name: 'Ventanas', price: '0', images: ['/products/ventanas/14/1.webp'], categoryId: 'ventanas' },
    { id: '68', name: 'Ventanas', price: '0', images: ['/products/ventanas/15/1.webp'], categoryId: 'ventanas' },
    { id: '69', name: 'Ventanas', price: '0', images: ['/products/ventanas/16/1.webp', '/products/ventanas/16/2.webp'], categoryId: 'ventanas' },
    { id: '70', name: 'Ventanas', price: '0', images: ['/products/ventanas/17/1.webp'], categoryId: 'ventanas' },
    { id: '71', name: 'Ventanas', price: '0', images: ['/products/ventanas/18/1.webp'], categoryId: 'ventanas' },
    { id: '72', name: 'Ventanas', price: '0', images: ['/products/ventanas/19/1.webp'], categoryId: 'ventanas' },
    { id: '73', name: 'Ventanas', price: '0', images: ['/products/ventanas/20/1.webp'], categoryId: 'ventanas' },
    { id: '74', name: 'Ventanas', price: '0', images: ['/products/ventanas/21/1.webp'], categoryId: 'ventanas' },
    { id: '75', name: 'Ventanas', price: '0', images: ['/products/ventanas/22/1.webp'], categoryId: 'ventanas' },
    { id: '75.1', name: 'Ventanas', price: '0', images: ['/products/ventanas/23/1.webp'], categoryId: 'ventanas' },

    { id: '76', name: 'Ventanas para baño', price: '0', images: ['/products/ventanas banos/1/1.webp'], categoryId: 'ventanas_banos' },
    { id: '77', name: 'Ventanas para baño', price: '0', images: ['/products/ventanas banos/2/1.webp'], categoryId: 'ventanas_banos' },
    { id: '78', name: 'Ventanas para baño', price: '0', images: ['/products/ventanas banos/3/1.webp'], categoryId: 'ventanas_banos' },
    { id: '79', name: 'Ventanas para baño', price: '0', images: ['/products/ventanas banos/4/1.webp'], categoryId: 'ventanas_banos' },

    { id: '80', name: 'Vitrinas', price: '0', images: ['/products/vitrinas/1/1.webp'], categoryId: 'vitrinas' },
    { id: '81', name: 'Vitrinas', price: '0', images: ['/products/vitrinas/2/1.webp'], categoryId: 'vitrinas' },
    { id: '82', name: 'Vitrinas', price: '0', images: ['/products/vitrinas/3/1.webp'], categoryId: 'vitrinas' },
    { id: '83', name: 'Vitrinas', price: '0', images: ['/products/vitrinas/4/1.webp'], categoryId: 'vitrinas' },

  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      this.category = params['name'];
      this.products = this.allProducts.filter(p => p.categoryId === this.categoryId);
    });
  }

  openZoom(product: Product) {
    this.selectedProduct = product;
  }
}
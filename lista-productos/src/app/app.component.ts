import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from '../app/interfaces/product.interface.';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-root',
  standalone: true, // Habilitar el uso de módulos independientes
  imports: [
    RouterOutlet,
    ProductComponent,
    ProductDetailsComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1500,
      inStock: true,
      onSale: false,
      imgURL: 'https://m.media-amazon.com/images/I/816uW9q6BKS.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      inStock: true,
      onSale: true,
      imgURL: 'https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg',
    },
    {
      id: 3,
      name: 'Tablet',
      price: 400,
      inStock: false,
      onSale: false,
      imgURL: 'https://m.media-amazon.com/images/I/81Xezm8jhwL.jpg',
    },
    {
      id: 4,
      name: 'Monitor',
      price: 200,
      inStock: true,
      onSale: true,
      imgURL: 'https://m.media-amazon.com/images/I/71+qQN-3KvL.jpg',
    },
    {
      id: 5,
      name: 'Teclado mecánico',
      price: 100,
      inStock: true,
      onSale: false,
      imgURL: 'https://m.media-amazon.com/images/I/61DPUzgNFjL.jpg',
    },
    {
      id: 6,
      name: 'Mouse inalámbrico',
      price: 50,
      inStock: false,
      onSale: false,
      imgURL:
        'https://m.media-amazon.com/images/I/61IpTocy++L._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 7,
      name: 'Impresora láser',
      price: 250,
      inStock: true,
      onSale: true,
      imgURL: 'https://m.media-amazon.com/images/I/51wzC9+uYgL.jpg',
    },
    {
      id: 8,
      name: 'Auriculares Bluetooth',
      price: 120,
      inStock: true,
      onSale: false,
      imgURL: 'https://m.media-amazon.com/images/I/616gXw-WpQL.jpg',
    },
    {
      id: 9,
      name: 'Silla ergonómica',
      price: 300,
      inStock: false,
      onSale: true,
      imgURL: 'https://m.media-amazon.com/images/I/61Ii23HTtNL.jpg',
    },
    {
      id: 10,
      name: 'Micrófono profesional',
      price: 180,
      inStock: true,
      onSale: false,
      imgURL:
        'https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 11,
      name: 'Disco SSD 1TB',
      price: 220,
      inStock: true,
      onSale: true,
      imgURL: 'https://m.media-amazon.com/images/I/71QygIvKzfL.jpg',
    },
    {
      id: 12,
      name: 'Cámara web 1080p',
      price: 90,
      inStock: true,
      onSale: false,
      imgURL: 'https://m.media-amazon.com/images/I/61Pztt0NLQL.jpg',
    },
    {
      id: 13,
      name: 'Router Wi-Fi 6',
      price: 160,
      inStock: false,
      onSale: true,
      imgURL: 'https://m.media-amazon.com/images/I/51DUq04ZEeL.jpg',
    },
    {
      id: 14,
      name: 'Tarjeta gráfica RTX 4060',
      price: 500,
      inStock: true,
      onSale: false,
      imgURL: 'https://m.media-amazon.com/images/I/71t1ClD2EtL.jpg',
    },
    {
      id: 15,
      name: 'Smartwatch',
      price: 250,
      inStock: true,
      onSale: true,
      imgURL: 'https://m.media-amazon.com/images/I/41WwvwxeeRL._AC_.jpg',
    },
  ];

  selectedProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    inStock: false,
    onSale: false,
    imgURL: '',
  };

  selectProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    inStock: false,
    onSale: false,
    imgURL: '',
  };

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
    console.log('Product selected:', this.selectedProduct);
  }
}

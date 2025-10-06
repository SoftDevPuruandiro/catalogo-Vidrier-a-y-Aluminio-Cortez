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
    { id: 'balones', name: 'Mini Balones', image: '' },
    { id: 'electronica', name: 'Electrónica', image: '' },
    { id: 'anime', name: 'Anime', image: '' },
  ];
}

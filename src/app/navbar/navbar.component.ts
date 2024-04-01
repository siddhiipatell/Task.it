import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor,  NgIf } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, RouterLink, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // menu = [
  //   {
  //     label: 'My Tasks',
  //     link: '/dashboard/tasks',
  //   },
  //   {
  //     label: 'Projects',
  //     link: '/projects',
  //   },
  //   {
  //     label: 'Users',
  //     link: '/users',
  //   },
  //   {
  //     label: 'Orgs',
  //     link: '/orgs',
  //   },
  // ];
}

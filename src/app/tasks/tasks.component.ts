import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { Breadcrumb } from '../../components/page-header/page-header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NavbarComponent, PageHeaderComponent, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  breadcrumbs: Breadcrumb[] = [{ label: 'Home', link: '/' }];

}

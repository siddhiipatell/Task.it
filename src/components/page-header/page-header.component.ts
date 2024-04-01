import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { ShimmerComponent, ShimmerModule } from '@sreyaj/ng-shimmer';
export interface Breadcrumb {
  label: string;
  link: string;
}

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterModule, RouterLink, NgFor,],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() title: string | undefined = '';
  @Input() loading = false;
  @Input() breadcrumbs: Breadcrumb[] = [{ label: 'Home', link: '/' }];
}

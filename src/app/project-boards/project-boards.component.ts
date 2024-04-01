import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-boards',
  standalone: true,
  imports: [ NavbarComponent, RouterLink],
  templateUrl: './project-boards.component.html',
  styleUrl: './project-boards.component.scss'
})
export class ProjectBoardsComponent {

}

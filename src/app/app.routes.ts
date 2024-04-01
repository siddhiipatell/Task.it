import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OrgSelectionComponent } from './login/org-selection/org-selection.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { OrgUsersComponent } from './org-users/org-users.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectBoardsComponent } from './project-boards/project-boards.component';
import { ProjectKanbanComponent } from './project-kanban/project-kanban.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'signup', component: SignupComponent },
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/home', component: HomeComponent},
    {path: 'org-selection', component: OrgSelectionComponent},
    {path: 'dashboard/projects', component: ProjectsComponent},
    {path: 'dashboard/projects/boards', component: ProjectBoardsComponent},
    {path: 'dashboard/projects/boards/kanban', component: ProjectKanbanComponent},
    {path: 'dashboard/tasks', component: TasksComponent},
    {path: 'dashboard/users', component: UsersComponent},
    {path: 'dashboard/orgs', component: OrgUsersComponent},
    {path: 'profile', component: ProfileComponent},

];

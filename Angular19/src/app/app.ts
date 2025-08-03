import { DatePipe, CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TokenService } from './services/token.service';
import { filter } from 'rxjs/operators';
import { LoaderComponent } from './loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterModule, CommonModule,  LoaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [DatePipe],
})
export class App implements OnInit {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  protected readonly title = signal('Angular19');

  showLayout: boolean = true;
  isLoggedIn: boolean = false;

  sectionState = {
    auth: true,
    games: true,
    basic: true,
    control: true,
    signals: true,
    toDoList: true,
  };

  toggleSection(section: keyof typeof this.sectionState): void {
    this.sectionState[section] = !this.sectionState[section];
  }

  ngOnInit(): void {
    this.checkLoginStatus();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showLayout = !event.url.includes('/login');
      this.checkLoginStatus();
    });

    // Redirect to login if token expired
    if (this.tokenService.isTokenExpired()) {
      this.router.navigate(['/login']);
    }
  }
    checkLoginStatus() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = token != null && !this.tokenService.isTokenExpired();
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}

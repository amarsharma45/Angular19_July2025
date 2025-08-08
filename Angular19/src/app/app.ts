import { DatePipe, CommonModule } from '@angular/common';
import { Component, OnInit, signal,AfterViewInit ,viewChild,ElementRef, ViewChild} from '@angular/core';
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
export class App implements OnInit ,AfterViewInit {
  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}
raindrops: any[] = [];
@ViewChild('bgMusic', { static: true }) bgMusic?: ElementRef<HTMLAudioElement>;

ngAfterViewInit() {
  if (this.bgMusic?.nativeElement) {
    const audio = this.bgMusic.nativeElement;
    const tryPlay = () => {
      audio.play().then(() => {
         audio.volume = .1;
      }).catch(err => {
      });
    };
    tryPlay(); // first try immediately
    document.addEventListener('click', tryPlay, { once: true }); // try again on click
  }
}
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


    ///audio 
    this.generateRaindrops();
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

  generateRaindrops() {
    // Generate 20-30 raindrops with random positions and timing
    for (let i = 0; i < 25; i++) {
      this.raindrops.push({
        left: Math.random() * window.innerWidth, // Random horizontal position
        delay: Math.random() * 3, // Random delay 0-3 seconds
        duration: 1 + Math.random() * 1.5 // Random duration 1-2.5 seconds
      });
    }
  }
}

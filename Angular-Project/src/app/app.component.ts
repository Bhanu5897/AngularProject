import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CalendarModule } from 'primeng/calendar';
import { HeaderComponent } from "./Website-home/header/header.component";
import { DropdownModule } from 'primeng/dropdown';
import { FooterComponent } from "./Website-home/footer/footer.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ButtonModule, TimelineModule, CalendarModule, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'Angular-Project';
  date: Date | undefined;
}

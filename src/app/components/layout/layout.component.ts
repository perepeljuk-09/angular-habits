import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterTabsComponent } from '../footer-tabs/footer-tabs.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterTabsComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}

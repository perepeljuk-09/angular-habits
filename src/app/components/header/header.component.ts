import { Component, inject } from '@angular/core';
import { IndicatorsService } from '../../services/indicators.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  indicatorsService = inject(IndicatorsService);

  //health = this.indicatorsService;
  //experience = this.indicatorsService.experience();
  //lvl = this.indicatorsService.lvl();

  constructor() {
  }

  public getHealthProcent(): number {
    return ((this.indicatorsService.health() / 50) * 100) - 100
  }
  public getExperienceProcent(): number {
    return ((this.indicatorsService.experience() / 50) * 100) - 100
  }
}

import { difficultType } from './../enums/difficultType';
import { positiveType } from './../enums/positiveType';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {
  health = signal(50);
  experience = signal(0);
  lvl = signal(1);

  constructor() { }

  public updateByClick(positivType: positiveType, diffType: difficultType) {
    console.log('work')
    if (positivType === positiveType.positive) {
      if (this.health() > 45) {
        this.health.set(50);

      } else {
        this.health.set(this.health() + 5)
      }

      if (this.willUpdateLevel(diffType)) {
        this.experience.set(this.experience() + (3 * (diffType + 1)) - 50)
        this.lvl.set(this.lvl() + 1)
      } else {
        this.experience.set(this.experience() + (3 * (diffType + 1)))
      }

    } else {
      if (this.willDie()) {
        this.health.set(1)
      } else {
        this.health.set(this.health() - 9)
      }
    }
  }

  private willUpdateLevel(diffType: difficultType): boolean {
    return this.experience() + (3 * (diffType + 1)) >= 50
  }


  private willDie(): boolean {
    return (this.health() - 9) <= 0
  }
}

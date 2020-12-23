import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {

  private flag: boolean = false;

  constructor() {}

  loadingOn(): void {
    this.flag = true;
  }

  loadingOff(): void {
    this.flag = false;
  }

  isLoading(): boolean {
    return this.flag;
  }
}

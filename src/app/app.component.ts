import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-pwa';
  shoes$: Observable<any[]> = this.apiService.getShoes();
  constructor(private swUpdate: SwUpdate, private apiService: ApiService) {}

  ngOnInit() {
    this.reloadApp();
  }

  reloadApp():void {
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(() => {
        console.log('SW UPDATE');
        if (confirm("New App Version is Available")) {
          window.location.reload();
        }
      });
    }
  }
}

import { Component, inject } from '@angular/core';
import { AdminService } from 'src/services/admin-service.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _adminService: AdminService;

  public lastUpdatedDate!: String;

  constructor() {
    this._adminService = inject(AdminService);
  }

  ngOnInit(): void {
    this._adminService.getAdmin().subscribe((admin) => {
      this.lastUpdatedDate = new Date(admin.lastUpdatedDate).toDateString();
    });
  }

  onClick() { 
    this._adminService.putAdmin({ lastUpdatedDate: new Date()}).subscribe({
      error: (admin) => { 
        console.log("Something went wrong...");
        console.log(admin);
      },
      next: (admin) => { 
        this.lastUpdatedDate = new Date(admin.lastUpdatedDate).toDateString();
      }
    })
  }
}

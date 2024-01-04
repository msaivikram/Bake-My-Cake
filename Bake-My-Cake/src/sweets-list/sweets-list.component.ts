import { Component } from '@angular/core';
import { cake } from 'src/models/cake';
import { SweetService } from 'src/services/sweet.service';

@Component({
  selector: 'app-sweets-list',
  templateUrl: './sweets-list.component.html',
  styleUrls: ['./sweets-list.component.css']
})
export class SweetsListComponent {

  tabButtons: Array<String> = ["All", "Cookie", "Cake", "Brownie"]
  cookies: string = "cookie";
  cakes: string = "cake";
  brownies: string = "brownie";
  all:string="all";

  sweets: Array<cake> = [];

  constructor(private sweetservice: SweetService) { }

  ngOnInit(): void {
    this.sweetservice.getAllSweets().subscribe({
      next: data => {
        this.sweets = data;
      },
      error: err => {
        alert(err);
      }
    });
  }

  onSearchTextChanged(name: string) {
    this.sweetservice.getAllSweets().subscribe({
      next: (data) => {
        if (name || name !== '') {
          this.sweets = data.filter((cake) =>
            cake.name?.toLowerCase().includes(name.toLowerCase())
          );
        } else {
          this.sweets = data;
        }
      },
      error: (error) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }
  reset(name:string){
    this.sweetservice.getAllSweets().subscribe({
      next: data => {if (name==="all") {
        this.sweets = data;
      }
      }
    })
  }
  displaysorted(name: string) {
    
    
    this.sweetservice.getAllSweets().subscribe({
      next: (data) => {
        if (name || name !== '') {
          this.sweets = data.filter((product) =>
            product.category?.toLowerCase().includes(name.toLowerCase())
            
            
          
            
          );
        } else {
          this.sweets = data;
        }
        console.log(this.sweets);
        
      },
      error: (error) => {
        alert('Network Error !! Please Try Again Later');
      },
    });
  }

}

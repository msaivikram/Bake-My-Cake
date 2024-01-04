import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { cake } from 'src/models/cake';
import { customerRequest } from 'src/models/customer-request';
import { customerRequestService } from 'src/services/customer-request.service';
import { RouteService } from 'src/services/route.service';
import { SweetService } from 'src/services/sweet.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-sweets-cart',
  templateUrl: './sweets-cart.component.html',
  styleUrls: ['./sweets-cart.component.css']
})
export class SweetsCartComponent {
  submitStatus: boolean | undefined;
 

  Cake?: cake;
  stars: Array<number> = [];
  Customerdet: customerRequest = {
    // name: undefined
  };
  
  

  constructor(private activatedRoute: ActivatedRoute,
    private Sweets: SweetService,
    private customerRequestService: customerRequestService,
    private routeService: RouteService,
    private builder: FormBuilder,
    private snackBar: MatSnackBar) { }


    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(param => {
        let id = param.get("id") ?? "";
        this.Sweets.getSweets(id).subscribe(data => {
          this.Cake = data;
          this.stars = new Array(this.Cake?.rating);
          this.submitStatus = false;
          // this.Cake.TotalBill=this.Cake.price
        })
      })
    }


canDeactivate() {
  if (!this.submitStatus)
      this.submitStatus = confirm("You have submitted a request to this cakes. Are you sure you want to leave?");
  return this.submitStatus;
}



 submit() {
  if (this.Customerdet.customerName && this.Customerdet.customerEmail && this.Customerdet.customerPhone && this.Customerdet.dateOfDelivery && this.Customerdet.customerAddress) {
      this.Customerdet.name = this.Cake?.name;
      // if(this.Cake){
      //   this.Customerdet.TotalBill = this.Cake.price * this.Customerdet.quantity;
      //   console.log(this.Customerdet.TotalBill);
        
      //   }
        
      this.customerRequestService.saveRequest(this.Customerdet).subscribe({
        next: data => {
          this.snackBar.open("Request Submitted", "", {
            duration: 3000
          });
          this.routeService.navigateToHomeView();
        },
        error: err => {
          alert(err);
        }
   })
   }
   
   



  }

  calculateTotalBill() {
    if (this.Customerdet.quantity && this.Cake) {
      this.Customerdet.TotalBill = this.Customerdet.quantity * this.Cake.price;
    } else {
      this.Customerdet.TotalBill = 0;
    }
  }
  formOrder = this.builder.group({
    // NoofItems:['',[Validators.pattern(/^[1-9]\d*$/)]],
    //         dateOfOrder:['',Validators.required]
          });
}


function totalPrice() {
  throw new Error('Function not implemented.');
}


// totalPrice() {
//   if(this.Cake && typeof this.Cake.price==='number' && this.customerRequest.)
// }

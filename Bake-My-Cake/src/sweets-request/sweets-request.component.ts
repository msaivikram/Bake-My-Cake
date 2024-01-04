import { Component, ViewChild } from '@angular/core';
import { customerRequest } from 'src/models/customer-request';
import { customerRequestService } from 'src/services/customer-request.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-sweets-request',
  templateUrl: './sweets-request.component.html',
  styleUrls: ['./sweets-request.component.css']
})
export class SweetsRequestComponent {
  displayedColumns: string[] = ['dateOfDelivery', 'customerName', 'customerEmail', 'customerPhone','customerAddress'];
  customerRequests: customerRequest[] = [];
  dataSource!: MatTableDataSource<customerRequest>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator)paginator!:MatPaginator
  constructor(private customerrequestservice: customerRequestService) { }

  ngOnInit(): void {
    this.customerrequestservice.getAllReqeusts().subscribe({
      next: data => {
        this.customerRequests = data;
        this.dataSource=new MatTableDataSource(this.customerRequests);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error: err => {
        alert(err);
      }
    });
  }
  filtering($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}



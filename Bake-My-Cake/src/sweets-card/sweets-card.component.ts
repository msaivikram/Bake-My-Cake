import { Component, Input, OnInit } from '@angular/core';
import { cake } from 'src/models/cake';

@Component({
  selector: 'app-sweets-card',
  templateUrl: './sweets-card.component.html',
  styleUrls: ['./sweets-card.component.css']
})
export class SweetsCardComponent implements OnInit {
@Input()
sweets!:cake
constructor(){}
ngOnInit(): void {
    
}
}

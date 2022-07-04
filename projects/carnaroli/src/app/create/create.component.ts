import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'kwoo-test-lib';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  counter$ = this.dataSharingService.counter$;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

  incrementCounter(): void {
    this.dataSharingService.incrementCounter();
  }
}

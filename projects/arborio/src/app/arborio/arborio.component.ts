import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'kwoo-test-lib';

@Component({
  selector: 'app-arborio',
  templateUrl: './arborio.component.html',
  styleUrls: ['./arborio.component.scss']
})
export class ArborioComponent implements OnInit {

  counter$ = this.dataSharingService.counter$;

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
  }

  incrementCounter(): void {
    this.dataSharingService.incrementCounter();
  }

}
import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-dnb',
  templateUrl: './dnb.component.html',
  styleUrls: ['./dnb.component.css']
})
export class DnbComponent implements OnInit {

  constructor(titleService: Title) {
      titleService.setTitle("De Nederlandsche Bank");
  }

  ngOnInit(): void {
  }

}

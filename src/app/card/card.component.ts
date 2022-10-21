import { Component, OnInit,Input } from '@angular/core';
import {faEnvelope,faMapMarkedAlt,faDatabase,faPhone} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user;
  faEnvelope=faEnvelope
  faDatabase=faDatabase
  faPhone=faPhone
  faMapMarkedAlt=faMapMarkedAlt
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-cfomr',
  templateUrl: './cfomr.component.html',
  styleUrls: ['./cfomr.component.css']
})
export class CfomrComponent implements OnInit {
  model: Contact;  
  statuses: string[];

  constructor() { }

  ngOnInit() {
      this.model = new Contact('a','','',null,'','','');
      this.statuses = ['Done.', 'Exempt.', 'In process...'];
  }

  
}

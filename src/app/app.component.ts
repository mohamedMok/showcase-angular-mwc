import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.type = 'selectable'
    }, 2500);
  }
  title = 'showcase-angular-mwc';
  size = 's';
  // Accordion
  open = undefined;
  //Breadcrumb 
  // breadcrumItems = [{"text":"Level 00","href":"#"},{"text":"Here is the level 01","href":"#"},{"text":"This is another very long level (Level 02) link","href":"#","isActive":true},{"text":"The third level is here","href":"#"},{"text":"This is the last Level link","href":null}];
  // breItems = undefined;
  // Tags
  type='selectable';
  helloWorld() {
    alert('Click actif :+1')
  }
  handleAccordion() {
    this.open = this.open === undefined ? true : undefined;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.type = 'selectable';
      console.log(this.opts);
      console.log(this.opts);
    }, 2500);
  }
  title = 'showcase-angular-mwc';
  checkboxValue = true;
  toggleCheck = true;
  checkboxtext = 'titit';
  indeterminate = true;
  size = 's';
  // Accordion
  open = true;
  opts = `[
    {
       "text":"Option 1",
       "value":"option1"
    },
    {
       "text":"Option 2",
       "value":"option2",
       "disabled":true
    },
    {
       "text":"Option 3",
       "value":"option3"
    }
 ]`;
  //Breadcrumb
  // breadcrumItems = [{"text":"Level 00","href":"#"},{"text":"Here is the level 01","href":"#"},{"text":"This is another very long level (Level 02) link","href":"#","isActive":true},{"text":"The third level is here","href":"#"},{"text":"This is the last Level link","href":null}];
  // breItems = undefined;
  // Tags
  type = 'selectable';
  helloWorld() {
    alert('Click actif :+1');
  }
  handleToggle() {
    this.toggleCheck = this.toggleCheck === undefined ? true : undefined;
  }

  handleAccordion() {
    this.open = this.open === undefined ? true : undefined;
  }
  handleCheckbox(e) {
    this.checkboxValue = e.detail;
  }
}

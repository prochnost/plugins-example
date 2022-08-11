import { Component, OnInit, NgModule } from '@angular/core';
import { Extension } from '@prochnost/plugins-core';

@Extension('my-button', [])
@Component({
  selector: 'my-button',
  template: `<button>My Button</button>`
})
export class MyButtonComponent implements OnInit {

  ngOnInit() {
    console.log('My Button Init');
  }

}

import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public myId = 'testID';
  topics = ['Angular', 'Vue', 'React', 'Bootstrap'];
  userModel = new User('krit', 'k@gmail.com', 707306116, '', 'morning', true);
  usertemp: number;
  // tslint:disable-next-line:typedef-whitespace
  usertemperature = 0 ;
}

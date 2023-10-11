import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-parchi',
  templateUrl: './parchi.component.html',
  styleUrls: ['./parchi.component.scss']
})
export class ParchiComponent {
  @Input() item = '';
}

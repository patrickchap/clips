import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {

  @Input() clipHeading: string = '';
  @Input() clipName: string = '';
  @Input() clipImage: string = '';
  @Input() clipDate: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

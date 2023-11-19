import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styleUrls: ['./clip.component.css']
})
export class ClipComponent implements OnInit {

  @Input() clipHeading = '';
  @Input() clipName = '';
  @Input() clipImage = '';
  @Input() clipDate = '';


  ngOnInit(): void {
  }

}

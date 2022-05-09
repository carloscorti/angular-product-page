import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit {
  @Input() rating: number = 0;
  @Input() starWidth: number = 0;
  cropWidth: number = 0;

  ngOnInit(): void {
    console.log("from OnInit StarComponent")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("from OnChanges StarComponent rating input", changes['rating'])
    console.log("from OnChanges StarComponent starWidth input", changes['starWidth'])
    this.cropWidth = this.starWidth / 5 * this.rating
    // this.cropWidth = 75 / 5 * this.rating
  }
}

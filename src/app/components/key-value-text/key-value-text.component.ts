import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-key-value-text',
  templateUrl: './key-value-text.component.html',
  styleUrls: ['./key-value-text.component.scss'],
})
export class KeyValueTextComponent implements OnInit {

  @Input() key: String;

  constructor() { }

  ngOnInit() {}
}

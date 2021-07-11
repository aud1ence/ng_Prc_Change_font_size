import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.scss']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize: any = 14;
  constructor() {
    
   }
  // fontSize1: number = 14;
  ngOnInit(): void {
  }

  changeFontSizeValue(fontSize: any) {
    this.fontSize = fontSize;
  }
}



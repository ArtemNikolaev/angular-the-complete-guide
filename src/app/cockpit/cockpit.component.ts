import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{newServerName: string, newServerContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{newServerName: string, newServerContent: string}>();

  // newServerName: string;
  // newServerContent: string;
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  @ViewChild('serverNameInput', { static: true }) serverNameInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
      newServerName: this.serverNameInput.nativeElement.value,
      newServerContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      newServerName: this.serverNameInput.nativeElement,
      newServerContent: this.serverContentInput.nativeElement.value,
    });
  }
}

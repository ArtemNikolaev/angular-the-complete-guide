import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement, contentInput:HTMLInputElement) {
    this.serverCreated.emit({
      newServerName: nameInput.value,
      newServerContent: contentInput.value,
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement, contentIput: HTMLInputElement) {
    this.blueprintCreated.emit({
      newServerName: nameInput.value,
      newServerContent: contentIput.value,
    });
  }
}

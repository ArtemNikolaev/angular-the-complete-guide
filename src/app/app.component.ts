import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}];

  onServerAdded(server: {newServerName: string, newServerContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: server.newServerName,
      content: server.newServerContent
    });
  }

  onBlueprintAdded(server: {newServerName: string, newServerContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: server.newServerName,
      content: server.newServerContent
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one';

  constructor(
    private http: HttpClient
  ) {

  }

  public click(e): void {
    this.http.post('/api/gql', { query: '{ hello }' })
    .subscribe(response => console.log(response));
  }
}

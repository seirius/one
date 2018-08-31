import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'one';

    public champions: Observable<any[]>;

    constructor(
        private http: HttpClient,
        private db: AngularFireDatabase
    ) {
        this.champions = db.list('champions').valueChanges();
    }

    public click(e): void {
        this.http.post('/api/gql', { query: '{ hello }' })
            .subscribe(response => console.log(response));
    }
}

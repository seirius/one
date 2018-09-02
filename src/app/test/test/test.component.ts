import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    title = 'one';

    public champions: Observable<any[]>;
    public icon = '';
    public summonerName: string;

    constructor(
        private http: HttpClient,
        private db: AngularFireDatabase
    ) {
        this.champions = db.list('champions').valueChanges();
    }

    public click(e): void {
        if (this.summonerName) {
            console.log(this.summonerName);
            this.http.post('/api/gql', { query: `{ summoner(name: "${this.summonerName}") {name, summonerLevel, profileIconId} }` })
            .subscribe((response: any) => {
                this.http.post('/api/gql', {query: `{ profileIcon(iconId: ${response.data.summoner.profileIconId}) }`})
                .subscribe((profileResponse: any) => {
                    this.icon = profileResponse.data.profileIcon;
                });
            });
        }
    }

    ngOnInit() {}

}

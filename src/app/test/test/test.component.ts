import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
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

    public user = {
        user: '',
        password: ''
    };

    public signedIn = false;

    constructor(
        private http: HttpClient,
        private db: AngularFireDatabase,
        private auth: AngularFireAuth
    ) {
        this.champions = db.list('champions').valueChanges();

        this.auth.authState.subscribe(user => {
            this.signedIn = user != null;
            if (user) {
                console.log(user);
            }
        });
    }

    public click(e): void {
        if (this.summonerName) {
            console.log(this.summonerName);
            this.http.post('/api/gql', 
                { query: `{ summoner(name: "${this.summonerName}") {name, summonerLevel, profileIconId} }` }
            ).subscribe((response: any) => {
                this.http.post('/api/gql', 
                {query: `{ profileIcon(iconId: ${response.data.summoner.profileIconId}) }`}
            ).subscribe((profileResponse: any) => {
                    this.icon = profileResponse.data.profileIcon;
                });
            });
        }
    }

    public signIn(e): void {
        this.auth.auth.signInWithEmailAndPassword(this.user.user, this.user.password)
        .catch(error => console.error(error));
    }

    public register(e): void {
        this.auth.auth.createUserWithEmailAndPassword(this.user.user, this.user.password)
        .catch(error => console.error(error));
    }

    public signOut(e): void {
        this.auth.auth.signOut();
    }

    ngOnInit() {}

}

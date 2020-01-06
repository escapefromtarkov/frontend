import { Injectable } from '@angular/core'
import { Http, Response, Headers, Request, URLSearchParams } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class TwitchService {
    private key     = '2arqsbmkt8uwzs2j39lv5df7t5t10ro';
    private _handle = 'https://api.twitch.tv/helix';
    private gameId  = 491931; // obtained by https://api.twitch.tv/helix/games?name=Escape%20From%20Tarkov

    constructor (private http :Http) {}

    /**
     * Список видео
     * @returns {Observable<R>}
     */
    list() :Observable<any> {
        var params = new URLSearchParams();

        var data = {
            game_id : this.gameId,
            first: 6
        };

        Object.keys(data).forEach((key) => {
            params.set(key, data[key]);
        });

        let headers = new Headers({
            'Client-ID': this.key
        });

        let options = new Request({
            url: `${this._handle}/streams`,
            headers: headers,
            search: params,
            method: 'get'
        });

        return this.http.request(options)
            .map(res => res.json())
            //.do(data => console.log(data))
            .catch(this.handleError.bind(this));
    }

    /**
     * Обработчик ошибок
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error :Response) {
        console.error('twitch.service', error);
        return Observable.throw(error.json() || 'Server error');
    }
}


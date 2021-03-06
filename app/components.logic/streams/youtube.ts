import { StreamsComponent } from './streams.component'
import { DomSanitizationService } from '@angular/platform-browser'
import { Component, ViewContainerRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import I18NPipe from '../../pipes/i18n'
import { I18N } from '../../services/i18n'
import { DateTimePipe } from '../../pipes/datetime'
import { TitleService } from '../../services/title'
import { /*YoutubePlayer, */YoutubeService } from '../../services/youtube'
import { StreamsFormatsService } from './streams__formats'

@Component({
    selector: 'streams',
    directives: [],
    host: {
        //'(window:resize)': 'resize($event)'
    },
    providers: [/*YoutubePlayer, */YoutubeService],
    pipes: [I18NPipe, DateTimePipe],
    styles: [require('./streams.component.styl')],
    template: require('./youtube.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class Youtube extends StreamsComponent {
    private YT;
    private player;

    private data = {
        live: null,
        archive: null
    };

    private getEmbed (video) {
        return this._domSanitize.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video.id.videoId}`);
    };

    private getLink (video) {
        return this._domSanitize.bypassSecurityTrustUrl(`https://www.youtube.com/watch?v=${video.id.videoId}`);
    };

    private getPx (px) {
        return this._domSanitize.bypassSecurityTrustStyle(`${px}px`);
    };

    constructor (view :ViewContainerRef,
                 /*private youtube :YoutubePlayer,*/
                 private youtube :YoutubeService,
                 private title   :TitleService,
                 private _domSanitize :DomSanitizationService,
                 i18n :I18N,
                 service :StreamsFormatsService,
                 changeDetector: ChangeDetectorRef) {

        super(view, service, changeDetector);

        title.setTitle(i18n.get('streams.docTitle', { service: 'Youtube' }));
        title.setDescription(i18n.get('streams.docDescription', { service: 'Youtube' }));

        changeDetector.detach();

        youtube.list({}).subscribe((data) => {
            this.data.archive = data.items;

            changeDetector.markForCheck();
            changeDetector.detectChanges();
        });

        youtube.list({ live: true }).subscribe((data) => {
            this.data.live = data.items;

            changeDetector.markForCheck();
            changeDetector.detectChanges();
        });

        /*youtube.player.subscribe((YT) => {
            this.YT = YT;
            this.player = new this.YT.Player('youtube-player', {
                height: '390',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this)
                }
            });
        })*/
    }

    /*private onPlayerReady (event) {
        console.log('ready', event);
    }

    private done = false;

    private onPlayerStateChange (event) {
        console.log('stateChange', event);
        if (event.data == this.YT.PlayerState.PLAYING && !this.done) {
            setTimeout(this.stopVideo.bind(this), 6000);
            this.done = true;
        }
    }
    private stopVideo() {
        this.player.stopVideo();
    }*/
}

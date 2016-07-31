import { Component, Input } from '@angular/core'
import { I18NPipe } from '../../pipes/i18n'
import { NumberPipe } from '../../pipes/number'
import { DateTimePipe } from '../../pipes/datetime'

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

@Component({
    selector: 'countdown',
    inputs: ['date', 'till', 'message', 'complete'],
    pipes: [I18NPipe, NumberPipe, DateTimePipe],
    template: require('./countdown.html'),
    styles: [require('./countdown.styl')]
})

export class Countdown {
    borderDate :Date;
    border :number;

    @Input() set date (val :string) {
        this.borderDate = new Date(val);
        this.border = this.borderDate.getTime();
    };

    completed :boolean;

    now :Date;
    calculator :any;

    days :number;
    hours :number;
    minutes :number;
    seconds :number;

    calc() {
        this.now = new Date();

        let time = this.now.getTime();
        let diff = this.border - time;

        if (diff < 0) {
            this.completed = true;

            return;
        }

        this.days = diff / DAY >>> 0;
        this.hours = (diff -= this.days * DAY) / HOUR >>> 0;
        this.minutes = (diff -= this.hours * HOUR) / MINUTE >>> 0;
        this.seconds = (diff -= this.minutes * MINUTE) / SECOND >>> 0;

        this.calculator = setTimeout(this.calc.bind(this), 1000);
    }

    ngOnInit() {
        this.calc();
    }

    ngOnDestroy() {
        clearTimeout(this.calculator);
    }
}

export default Countdown

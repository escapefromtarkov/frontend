'use strict';

import leadZeros from './leadzeros'

export function NumberTransform (value :number, args ?:any) :string {
    let val :any = value || 0;

    if (args && args.fixed !== undefined) {
        val = val.toFixed(args.fixed);
    } else {
        val = val.toString();
    }

    if (args && args.trim) {
        val = val.slice(0, args.trim);
    }

    if (args && args.leading) {
        val = leadZeros(val, args.leading);
    }

    return val.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');
}

export default NumberTransform

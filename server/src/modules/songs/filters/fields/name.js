import {StringLength} from 'input-filter'

export const name = {
    required: true,
    validators: [
        new StringLength({min: 1})
    ]
}
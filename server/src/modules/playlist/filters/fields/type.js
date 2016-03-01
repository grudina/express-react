import {StringLength} from 'input-filter'

export const type = {
    required: true,
    validators: [
        new StringLength({min: 1})
    ]
}
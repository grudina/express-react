import {StringLength} from 'input-filter'

export const path = {
    required: true,
    validators: [
        new StringLength({min: 3})
    ]
}
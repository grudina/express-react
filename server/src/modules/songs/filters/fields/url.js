import {StringLength} from 'input-filter'

export const url = {
    required: true,
    validators: [
        new StringLength({min: 3})
    ]
}
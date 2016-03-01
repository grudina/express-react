import {StringLength} from 'input-filter'

export const name = {
    required: true,
    validator: [
        new StringLength({min: 1})
    ]
}
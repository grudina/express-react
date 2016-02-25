import {InputFilter, StringLength} from 'input-filter'

export const filter = InputFilter.factory({
    name: {
        required: true,
        validators: [
            new StringLength({min: 1})
        ]
    }
});
import {InputFilter} from 'input-filter'

import {name} from './fields/name'
import {type} from './fields/type'

let filterFields = {name, type};

export const filter = InputFilter.factory({name, type});

export const build = (fields) =>
InputFilter.factory(
    fields
        .filter(el => filterFields.hasOwnProperty(el))
        .reduceRight((c, el) => ({...c, [el]: filterFields[el]}), {})
);
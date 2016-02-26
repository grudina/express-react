import {InputFilter} from 'input-filter'

import {name} from './fields/name'
import {url} from './fields/url'
import {path} from './fields/path'
import {duration} from './fields/duration'

let filterFields = {name, duration, path, url};

export const filter = InputFilter.factory({name, url, path, duration});

export const build = (fileds) =>
    InputFilter.factory(
        fileds
            .filter(el => filterFields.hasOwnProperty(el))
            .reduceRight((c, el) => ({...c, [el]: filterFields[el]}), {}));
// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.


import Schema from '../schema';

import default_safe from '../default_safe';

import jsTypeUndefined from '../type/js/undefined'; 
import jsTypeRegexp from '../type/js/regexp';
import jsTypeFunction from '../type/js/function';

Schema.DEFAULT = new Schema({
  include: [
    default_safe
  ],
  explicit: [
    jsTypeUndefined,
    jsTypeRegexp,
    jsTypeFunction
  ]
});

export default Schema.DEFAULT;

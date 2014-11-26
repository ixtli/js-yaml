// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)


import Schema from '../schema';

import core from './core';

import timestamp from '../type/timestamp';
import merge from '../type/merge';

import binary from '../type/binary';
import omap from '../type/omap';
import pairs from '../type/pairs';
import set from '../type/set';


var default_safe = new Schema({
  include: [
    core
  ],
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});

export default default_safe;

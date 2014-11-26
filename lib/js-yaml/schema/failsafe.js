// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346


import Schema from '../schema';

import str from '../type/str';
import seq from '../type/seq';
import map from '../type/map';


export default new Schema({
  explicit: [
    str,
    seq,
    map
  ]
});

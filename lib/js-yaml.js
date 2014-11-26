import loader from './js-yaml/loader';
import dumper from './js-yaml/dumper';
import Type from './js-yaml/type';
import Schema from './js-yaml/schema';
import FAILSAFE_SCHEMA from './js-yaml/schema/failsafe';
import JSON_SCHEMA from './js-yaml/schema/json';
import CORE_SCHEMA from './js-yaml/schema/core';
import DEFAULT_SAFE_SCHEMA from './js-yaml/schema/default_safe';
import DEFAULT_FULL_SCHEMA from './js-yaml/schema/default_full';
import YAMLException from './js-yaml/exception';

import MINIMAL_SCHEMA from './js-yaml/schema/failsafe';
import SAFE_SCHEMA from './js-yaml/schema/default_safe';
import DEFAULT_SCHEMA from './js-yaml/schema/default_full';

function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}

export default {
	Type: Type,
	Schema: Schema,
	FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
	JSON_SCHEMA: JSON_SCHEMA,
	CORE_SCHEMA: CORE_SCHEMA,
	DEFAULT_SAFE_SCHEMA: DEFAULT_SAFE_SCHEMA,
	DEFAULT_FULL_SCHEMA: DEFAULT_FULL_SCHEMA,

	load: loader.load,
	loadAll: loader.loadAll,
	safeLoad: loader.safeLoad,
	safeLoadAll: loader.safeLoadAll,
	dump: dumper.dump,
	safeDump: dumper.safeDump,

	YAMLException: YAMLException,

	// Deprecared schema names from JS-YAML 2.0.x
	MINIMAL_SCHEMA: MINIMAL_SCHEMA,
	SAFE_SCHEMA: SAFE_SCHEMA,
	DEFAULT_SCHEMA: DEFAULT_SCHEMA,

	// Deprecated functions from JS-YAML 1.x.x
	scan: deprecated('scan'),
	parse: deprecated('parse'),
	compose: deprecated('compose'),
	addConstructor: deprecated('addConstructor')

};

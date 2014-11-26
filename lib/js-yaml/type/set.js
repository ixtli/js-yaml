import Type from '../type';

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (null !== object[key]) {
        return false;
      }
    }
  }

  return true;
}

var SetType = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet
});

export default SetType;

import Type from '../type';


function resolveYamlMerge(data) {
  return '<<' === data;
}

var MergeType = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge,
});

export default MergeType;

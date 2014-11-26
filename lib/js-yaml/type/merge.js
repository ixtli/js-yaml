import Type from '../type';


function resolveYamlMerge(data) {
  return '<<' === data;
}

export default new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge,
});

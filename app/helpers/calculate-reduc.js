import { helper } from '@ember/component/helper';

export default helper(function calculateReduc(params/*, hash*/) {
  let [model] = params;
  if (model.codePromo == model.promos) {
    return 1000
  } return 888
});

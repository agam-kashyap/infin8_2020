var formPropsSet = new Set(['form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget']);
export default function getFormProps(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (formPropsSet.has(key)) {
      // eslint-disable-next-line no-param-reassign
      prev[key] = props[key];
    }

    return prev;
  }, {});
}
//# sourceMappingURL=get-form-props.js.map
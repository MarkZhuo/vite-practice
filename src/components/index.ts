import SvgIcon from './SvgIcon';

const allGlobalComponents = { SvgIcon };
export default {
  install(app) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key]);
    });
  }
};

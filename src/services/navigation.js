let navigator;

function setNavigator(ref) {
  navigator = ref;
}

function navigate(routeName, params) {
  navigator.navigate(routeName, params);
}

export default {
  navigate,
  setNavigator,
};

export const getGoBackFunction = navigation => () => navigation.goBack();
export const getNavigateFunction = (navigation, name) => () => navigation.navigate(name);
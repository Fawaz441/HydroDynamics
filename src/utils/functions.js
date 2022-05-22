export const getGoBackFunction = navigation => () => navigation.goBack();
export const getNavigateFunction = (navigation, name) => () =>
    navigation.navigate(name);
export const goToTablessScreen = (navigation, name) => {
    return () => navigation.navigate('TablessPages', {screen: name});
};
export const merger = (obj, newObj) => ({...obj, ...newObj});

const localeInitialState = {
  lang: 'uk',
};

// Redux reducer function responsible for managing the state related to the localization (locale) of the application
export const localeReducer = (state = localeInitialState, action) => {
  switch (action.type) {
    case 'locale/changeLang':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

// actions -> plain js objects to described what will happen to our application
export const changeLang = newLang => {
  return {
    // Describes the type of action being dispatched
    type: 'locale/changeLang',

    // Contains the actual data associated with the action
    payload: newLang,
  };
};

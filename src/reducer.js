var initialState = {
    country: [],
    formData: {},
  };
  
  var Reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'GET':
        return {
          ...state,
          country: [...state.country, ...action.response.data],
        }
        case 'SUBMIT':
          return {
            ...state,
            formData: action.data,
          }

      default:
        return state;
    }
  };
  
  
  export default Reducer;
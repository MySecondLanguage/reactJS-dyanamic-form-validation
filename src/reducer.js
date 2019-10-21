var initialState = {
    country: [],
  };
  
  var Reducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'GET':
        return {
          ...state,
          country: [...state.country, ...action.response.data],
        }
        case 'SUBMIT':
          console.log(action)
          return {
            ...state,
            country: [...state.country, ...action.response.data],
          }

      default:
        return state;
    }
  };
  
  
  export default Reducer;
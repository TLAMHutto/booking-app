
 export const authReducer = (state = {name:'Keaton' ,role: 'seller'}, action) => {
    switch (action.type) {
      case 'LOGged_IN_USER':
        return {
          ...state, ...action.payload}
          case 'LOGOUT':
            return action.payload;
      default:
        return state;
    }
  }
  
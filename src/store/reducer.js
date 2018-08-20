const initialState = {success : "", error : {},message:"ClickMe",token:""}
const  Reducer = (state = initialState ,action) =>
{
  switch (action.type) {
    case "BEFORE":
      state = {
        ...state
      };
      break;
    case "SUCCESS":{
        state = {
          ...state,
          success : action.userdata,
        };
        break;
      }
    case "FAILURE":{
          state = {
            ...state,
            error : action.error
          };
          break;
        }
    case "MESSAGE":{
              state = {
                ...state,
              message : action.message
              };
              break;
            }
    case "TOKEN":{
              state = {
                ...state,
              token : action.token
              };
              break;
            }
  }
return state;
};
export default Reducer;

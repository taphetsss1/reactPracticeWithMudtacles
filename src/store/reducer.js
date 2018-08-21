const initialState = {success : "", error : {},message:"ClickMe",token:"",status:false}
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
    case "STATUS":{
          state = {
            ...state,
            status : action.status
          };
          break;
        }
    }
  
return state;
};
export default Reducer;

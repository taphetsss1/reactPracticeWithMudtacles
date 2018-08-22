const initialState = {success : "", error : {},message:"ClickMe",id:"",status:false,chats:[]}
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
          success : action.userdata.displayName,
          id : action.userdata.uid
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
    case "STATUS":{
          state = {
            ...state,
            status : action.status
          };
          break;
        }
    case "ADDMESSAGE":{
      state = {
        ...state,
        // chats : [...state.chats,action.chats]
        chats: {
          ...state.chats,
          ...action.chats
        }
      };
    }
    }
return state;
};
export default Reducer;

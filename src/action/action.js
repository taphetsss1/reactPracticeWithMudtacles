export function onBefore()
{
  return {
    type : "BEFORE",
    userdata : {}
  };
}
export function onSuccess(state)
{
  return {
    type : "SUCCESS",
    userdata : state,
  };

}
export function onError(state)
{
  return {
    type : "FAILURE",
    error : state
  };
}

export function clickMe(message)
{
  return {
    type : "MESSAGE",
    message : message
  };
}

export function addMessage(message)
{
  return {
    type : "ADDMESSAGE",
    chats : message
  };
}
export function addToken(token)
{
  return {
    type : "TOKEN",
    token : token
  };
}
export function checkStatus(stat)
{
  return {
    type : "STATUS",
    status : stat
  };
}
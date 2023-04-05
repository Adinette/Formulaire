//import { stringifyQuery } from "vue-router"
asyn: login=(cntext,payload)=>{
  const response =await
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuJrnAh7rUbQMw7gBfLjq2CE_JHq5FbBI',
{
    method:'POST',
    body:JSON.stringify({
        email:payload.email,
        password:payload.password,
        returnSecureToken:true,
    })
});
const responseData= await
 response.json();
if (!response.ok){
    console.log(responseData);
    const error = new Error(responseData.message||'Failed to authentificate');
    throw error;
}
console.log(responseData);
context.commit('setUser', {
    token: responseData.idToken,
    userId: responseData.localId,
    tokenExpiration:responseData.expiresIn
  });
}
async: signup=(context,payload)=>{
  const response = await 
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuJrnAh7rUbQMw7gBfLjq2CE_JHq5FbBI',
{
    method:'POST',
    body:JSON.stringify({
        email:payload.email,
        password:payload.password,
        returnSecureToken:true,
    })
})
}
const responseData = await response.json();
if (!response.ok){
    console.log(responseData);
    const error = new Error(responseData.message||'Failed to authentificate');
    throw error;
}
console.log(responseData);
context.commit('setUser', {
    token: responseData.idToken,
    userId: responseData.localId
  });
tryLogin=(context) =>{
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const tokenExpiration = localStorage.getItem('tokenExpiration');

  const expiresIn = +tokenExpiration - new Date().getTime();

  if (expiresIn < 0) {
    return;
  }

  timer = setTimeout(function() {
    context.dispatch('autoLogout');
  }, expiresIn);

  if (token && userId) {
    context.commit('setUser', {
      token: token,
      userId: userId
    });
  }
},
logout=(context)=> {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('tokenExpiration');

  clearTimeout(timer);

  context.commit('setUser', {
    token: null,
    userId: null
  });
}
autoLogout=(context)=> {
  context.dispatch('logout');
  context.commit('setAutoLogout')
}
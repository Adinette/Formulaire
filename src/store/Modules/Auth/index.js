import mutations from './store/Modules/Auth/mutations.js';
import actions from './store/Modules/Auth/actions.js';
import getters from './store/Modules/Auth/getters.js'

state=()=> {
    return {
        userId: null,
        token: null,
       tokenExpiration: null,
       didAutoLogout: false   
      };
};
mutations,
actions,
getters
import axios from '../../redux/axios/index';

class UserService {

  deactivateUser(userId){
    return axios.post("/user/deactivate" + '/' + userId);
  }

  activateUser(userId){
    return axios.post("/user/activate" + '/' + userId)
  }
}

export default new UserService()

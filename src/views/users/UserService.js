import axiosInstance from '../../redux/axiosInstance';

class UserService {

  deactivateUser(userId){
    return axiosInstance.post("/user/deactivate" + '/' + userId);
  }

  activateUser(userId){
    return axiosInstance.post("/user/activate" + '/' + userId)
  }
}

export default new UserService()

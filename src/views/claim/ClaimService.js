import axiosInstance from '../../redux/axiosInstance/';

class ClaimService {

  rejectClaim(userId){
    return axiosInstance.post("/reject-claim" + '/' + userId);
  }

  approveClaim(userId){
    return axiosInstance.post("/approve-claim" + '/' + userId)
  }
}

export default new ClaimService()

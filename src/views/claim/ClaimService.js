import axios from '../../redux/axios/index';

class ClaimService {

  rejectClaim(userId){
    return axios.post("/reject-claim" + '/' + userId);
  }

  approveClaim(userId){
    return axios.post("/approve-claim" + '/' + userId)
  }
}

export default new ClaimService()

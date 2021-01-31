import axios from '../../redux/axios/index';

class ListingService {

  rejectListing(userId){
    return axios.post("/listing-request/reject" + '/' + userId);
  }

  approveListing(userId){
    return axios.post("/listing-request/approve" + '/' + userId)
  }
}

export default new ListingService()

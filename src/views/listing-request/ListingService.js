import axiosInstance from '../../redux/axiosInstance/';

class ListingService {

  rejectListing(userId){
    return axiosInstance.post(`/listing-request/reject/${userId}`);
  }

  approveListing(userId){
    return axiosInstance.post(`listing-request/approve/${userId}`)
  }
}

export default new ListingService()

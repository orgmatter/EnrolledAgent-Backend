import axiosInstance from '../../redux/axiosInstance';

class SponsorService {

    deleteSponsor(spoId){
        return axiosInstance.delete(`/sponsor/${spoId}`);
    }
}

export default new SponsorService()

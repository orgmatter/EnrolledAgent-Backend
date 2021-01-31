import axios from '../../redux/axios/index';

class SponsorService {

    deleteSponsor(spoId){
        return axios.delete("/sponsor" + '/' + spoId);
    }
}

export default new SponsorService()

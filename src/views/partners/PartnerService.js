import axios from '../../redux/axios/index';

class PartnerService {

    deletePartner(partId){
        return axios.delete("partner" + '/' + partId);
    }
}

export default new PartnerService()

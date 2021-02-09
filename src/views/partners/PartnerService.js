import axiosInstance from '../../redux/axiosInstance';

class PartnerService {

    deletePartner(partId){
        return axiosInstance.delete("partner" + '/' + partId);
    }
}

export default new PartnerService()

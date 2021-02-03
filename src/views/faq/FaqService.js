import axios from '../../redux/axios/index';

class FaqService {

    deleteFaq(faqId){
        return axios.delete("/faq" + '/' + faqId);
    }
}

export default new FaqService()

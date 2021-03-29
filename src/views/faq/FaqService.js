import axiosInstance from '../../redux/axiosInstance';

class FaqService {

    deleteFaq(faqId){
        return axiosInstance.delete(`/faq/${faqId}`);
    }
}

export default new FaqService()

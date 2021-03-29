import axiosInstance from '../../../redux/axiosInstance';

class ResourceService {

    deleteResource(resourceId){
        return axiosInstance.delete(`resource/${resourceId}`);
    }
}

export default new ResourceService()

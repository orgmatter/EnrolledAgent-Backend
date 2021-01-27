import axios from '../../../redux/axios/index';

class ResourceService {

    deleteResource(resourceId){
        return axios.delete("resource" + '/' + resourceId);
    }
}

export default new ResourceService()

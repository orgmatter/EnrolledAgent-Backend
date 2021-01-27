import axios from '../../../redux/axios/index';

class ResourceCategoryService {

    deleteResourceCat(catResourceId){
        return axios.delete("/category/resource" + '/' + catResourceId);
    }
}

export default new ResourceCategoryService()

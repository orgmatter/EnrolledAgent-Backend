import axiosInstance from '../../../redux/axiosInstance';

class ResourceCategoryService {

    deleteResourceCat(catResourceId){
        return axiosInstance.delete("/category/resource" + '/' + catResourceId);
    }
}

export default new ResourceCategoryService()

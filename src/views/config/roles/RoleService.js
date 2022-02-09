import axiosInstance from '../../../redux/axiosInstance/';

class RoleService {

    deleteRole(roleId){
        return axiosInstance.delete(`/role/${roleId}`);
    }
}

export default new RoleService()

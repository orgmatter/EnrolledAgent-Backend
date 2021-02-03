import axios from '../../../redux/axios/index';

class RoleService {

    deleteRole(roleId){
        return axios.delete("/role" + '/' + roleId);
    }
}

export default new RoleService()

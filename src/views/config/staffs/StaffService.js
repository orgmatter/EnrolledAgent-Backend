import axios from '../../../redux/axios/index';

class StaffService {

    deleteStaff(staffId){
        return axios.delete("/staff" + '/' + staffId);
    }
}

export default new StaffService()

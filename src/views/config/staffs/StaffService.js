import axiosInstance from '../../../redux/axiosInstance/';

class StaffService {

    deleteStaff(staffId){
        return axiosInstance.delete(`/staff/${staffId}`);
    }
}

export default new StaffService()

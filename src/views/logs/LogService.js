import axiosInstance from '../../redux/axiosInstance';

class LogService {

    deleteLog(logId){
        return axiosInstance.delete(`log/${logId}`);
    }
}

export default new LogService()

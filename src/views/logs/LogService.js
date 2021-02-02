import axios from '../../redux/axios/index';

class LogService {

    deleteLog(logId){
        return axios.delete("log" + '/' + logId);
    }
}

export default new LogService()

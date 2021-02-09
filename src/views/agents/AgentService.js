import axiosInstance from '../../redux/axiosInstance/';

class AgentService {

    deleteAgent(agentId){
        return axiosInstance.delete("/agent" + '/' + agentId);
    }
}

export default new AgentService()

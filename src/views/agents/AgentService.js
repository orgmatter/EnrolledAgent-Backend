import axiosInstance from '../../redux/axiosInstance/';

class AgentService {

    deleteAgent(agentId){
        return axiosInstance.delete(`/agent/${agentId}`);
    }

    toggleStatus(agentId){
        return axiosInstance.put(`/agent/status/${agentId}`);
    }
}

export default new AgentService()

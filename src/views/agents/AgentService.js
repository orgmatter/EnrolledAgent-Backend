import axios from '../../redux/axios/index';

class AgentService {

    deleteAgent(agentId){
        return axios.delete("/agent" + '/' + agentId);
    }
}

export default new AgentService()

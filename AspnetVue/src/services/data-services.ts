import Axios from 'axios';

const dataServicesUrl = 'https://devdataservices.acceptanceinsurance.com/fusion'

export default {
    async getUserSessionData(sessionId) {
        const credentials = { SESSIONID: sessionId};
        const dsInvoke = {
            service: 'ISeries',
            type: 0,
            data: {
                name: 'GetAgentInformation',
                arguments: {
                    arguments: credentials
                }
            }
        };

        const response = await Axios.post(dataServicesUrl, dsInvoke);
        return response.data;
    }

}
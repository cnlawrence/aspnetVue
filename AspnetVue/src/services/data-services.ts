import Axios from 'axios';
import ISeriesResponse from './iseries-response';
// import { vm } from '../main';

export default class DataServices {
    dataServicesUrl: string = '';

    constructor(dataServicesUrl: string) {
        this.dataServicesUrl = dataServicesUrl
    }
    
    async getUserSessionData(sessionId: string) {

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

        const response = await Axios.post(this.dataServicesUrl, dsInvoke);
        ISeriesResponse.checkISeriesResponse(response.data);
        return response.data;
    }
};

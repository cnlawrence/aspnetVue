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

        // const dataServicesUrl = vm.$root.$data.dataServicesUrl;
        const response = await Axios.post(this.dataServicesUrl, dsInvoke);
        this.checkISeriesResponse(response.data);
        return response.data;
    }

    checkISeriesResponse(response: ISeriesResponse ){
        const session = response.data.content.webServiceXml.portalSession;
        const status = response.data.content.webServiceXml.status;
        if (session.sessionHalt) {            
            const err = new Error();
            err.name = session.haltTitle;
            err.message = session.haltMessage;
            throw err;
        }

        if (!status.success) {
            const err = new Error();
            err.name = status.title;
            err.message = status.message;
            throw err;
        }
    }
};

import Axios from 'axios';

const dataServicesUrl = 'https://devdataservices.acceptanceinsurance.com/fusion';

export default {
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

        const response = await Axios.post(dataServicesUrl, dsInvoke);
        this.checkISeriesResponse(response.data);
        return response.data;
    },
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

class ISeriesResponse {
    type: string = '';
    data!: {
        status: number,
        content: {
            webServiceXml: {
                portalSession: {
                    sessionId: string,
                    sessionHalt: boolean,
                    haltTitle: string,
                    haltMessage: string,
                    validSession: boolean,
                    validUser: boolean,
                    user: string
                },
                inputData: any,
                status: {
                    success: boolean,
                    title: string,
                    message: string
                }                
            }
        }
    }
    service: string = '';
    invocationId: string = '';
}
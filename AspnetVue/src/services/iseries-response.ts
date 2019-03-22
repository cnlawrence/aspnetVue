export default class ISeriesResponse {
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
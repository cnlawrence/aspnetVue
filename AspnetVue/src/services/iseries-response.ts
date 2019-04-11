export default class ISeriesResponse {
    type: string = '';
    data!: {
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
    service: string = '';
    invocationId: string = '';    

  public static checkISeriesResponse(response: any){
    console.log(response)
    const session = response.portalSession;
    const status = response.status;
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
}
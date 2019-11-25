// Generated by https://quicktype.io

export interface Inbox {
    totalNumberOfPages: string;
    limit:              string;
    requests:           Request[];
}

export interface Request {
    status:                              string;
    providerEngagementRequestIdentifier: string;
    providerName:                        string;
    capabilityIndicatorDescription:      string;
    firstTimeSentToHostPlanDate:         string;
    age:                                 number;
    showAlert:                           boolean;
}

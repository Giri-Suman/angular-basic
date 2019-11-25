// Generated by https://quicktype.io

export interface Archive {
    archive: ArchiveElement[];
}

export interface ArchiveElement {
    totalNumberOfPages: string;
    pageNumber:         string;
    limit:              string;
    year:               string;
    requests:           Request[];
}

export interface Request {
    status:                              string;
    providerEngagementRequestIdentifier: string;
    providerName:                        string;
    capabilityIndicatorDescription:      string;
    firstTimeSentToHostPlanDate:         string;
    closedDate:                          string;
}

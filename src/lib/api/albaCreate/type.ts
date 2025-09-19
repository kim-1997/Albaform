export type CreateAlbaRequest = {
    isPublic: boolean;
    hourlyWage: number;
    isNegotiableWorkDays: boolean;
    workDays: string[];
    workStartTime: string;
    workEndTime: string;
    workStartDate: string;
    workEndDate: string;
    location: string;
    preferred: string;
    age: string;
    education: string;
    gender: string;
    numberOfPositions: number;
    imageUrls: string[];
    recruitmentStartDate: string;
    recruitmentEndDate: string;
    description: string;
    title: string;
};

export type CreateAlbaResponse = {
    id: number;
    title: string;
    createdAt: string;
    updatedAt: string;
};

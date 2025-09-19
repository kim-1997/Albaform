export type Alba = {
    id: number; // 게시글 고유 ID
    title: string; // 게시글 제목
    createdAt: string; // 게시글 생성일 (ISO 문자열)
    updatedAt: string; // 게시글 수정일 (ISO 문자열)
    isPublic: boolean; // 게시글 공개 여부 (true면 공개)
    scrapCount: number; // 스크랩된 횟수
    applyCount: number; // 지원자 수 (알바 신청 수)
    imageUrls: string[]; // 이미지 URL 배열 (게시글에 첨부된 사진들)
    recruitmentStartDate: string; // 모집 시작일 (ISO 문자열)
    recruitmentEndDate: string; // 모집 마감일 (ISO 문자열)
};

export type GetAlbaResponse = {
    nextCursor: number | null;
    data: Alba[];
};

export type GetAlbaParams = {
    limit: number;
    cursor?: number;
    orderBy?: string;
    keyword?: string;
    isRecruiting?: boolean;
};

export interface StatisticData {
  id: number; // 키값, 번호
  question: string; // 질문
  options: ResponseObject[]; // 결과
}

export interface ResponseObject {
  optionDescription: string; // 대답
  optionCount: number; // 선택한 비율
  rank: number;
}

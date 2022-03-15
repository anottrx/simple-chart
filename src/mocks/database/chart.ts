import { StatisticData } from "../../types/chartTypes";

// export interface StatisticData {
//   id: number; // 키값, 번호
//   question: string; // 질문
//   options: ResponseObject[]; // 결과
// }

// export interface ResponseObject {
//   optionDescription: string; // 대답
//   optionCount: number; // 선택한 비율
//   rank: number;
// }

export const STATISTIC_DATA: StatisticData[] = [
  {
    id: 1,
    question: "연령대",
    options: [
      { optionDescription: "0-10", optionCount: 1, rank: 0 },
      { optionDescription: "10-20", optionCount: 2, rank: 0 },
      { optionDescription: "20-30", optionCount: 80, rank: 0 },
      { optionDescription: "30-40", optionCount: 9, rank: 0 },
      { optionDescription: "40-50", optionCount: 2, rank: 0 },
      { optionDescription: "50-60", optionCount: 3, rank: 0 },
      { optionDescription: "60-70", optionCount: 2, rank: 0 },
      { optionDescription: "70-80", optionCount: 1, rank: 0 },
    ],
  },
  {
    id: 2,
    question: "성별",
    options: [
      { optionDescription: "여성", optionCount: 51, rank: 1 },
      { optionDescription: "남성", optionCount: 49, rank: 2 },
    ],
  },
  {
    id: 3,
    question: "희망연봉",
    options: [
      { optionDescription: "2000-3000", optionCount: 1, rank: 0 },
      { optionDescription: "3000-4000", optionCount: 19, rank: 0 },
      { optionDescription: "4000-5000", optionCount: 30, rank: 0 },
      { optionDescription: "5000-6000", optionCount: 30, rank: 0 },
      { optionDescription: "6000-7000", optionCount: 10, rank: 0 },
      { optionDescription: "7000-8000", optionCount: 5, rank: 0 },
      { optionDescription: "8000-9000", optionCount: 2, rank: 0 },
      { optionDescription: "1억 이상", optionCount: 3, rank: 0 },
    ],
  },
  {
    id: 4,
    question: "선호하는 근무 형태",
    options: [
      { optionDescription: "재택근무", optionCount: 70, rank: 1 },
      { optionDescription: "출퇴근", optionCount: 10, rank: 3 },
      {
        optionDescription: "난 짱이라서 어디든 가능",
        optionCount: 19,
        rank: 2,
      },
      { optionDescription: "상관 없음", optionCount: 1, rank: 4 },
    ],
  },
  {
    id: 5,
    question: "일할 때 즐겨마시는 드링크",
    options: [
      { optionDescription: "커피류", optionCount: 50, rank: 1 },
      { optionDescription: "에너지음료", optionCount: 30, rank: 2 },
      { optionDescription: "물", optionCount: 9, rank: 5 },
      { optionDescription: "차", optionCount: 11, rank: 4 },
      { optionDescription: "기타", optionCount: 30, rank: 2 },
    ],
  },
  {
    id: 6,
    question: "모바일 운영체제",
    options: [
      { optionDescription: "iOS", optionCount: 51, rank: 1 },
      { optionDescription: "Andriod", optionCount: 49, rank: 2 },
    ],
  },
  {
    id: 7,
    question: "모든 것을 고려했을 때, 요즘 당신의 삶은 얼마나 만족스러운가요?",
    options: [
      { optionDescription: "모르겠다", optionCount: 1, rank: 0 },
      { optionDescription: "불만족1", optionCount: 9, rank: 0 },
      { optionDescription: "불만족2", optionCount: 10, rank: 0 },
      { optionDescription: "불만족3", optionCount: 5, rank: 0 },
      { optionDescription: "불만족4", optionCount: 25, rank: 0 },
      { optionDescription: "불만족5", optionCount: 20, rank: 0 },
      { optionDescription: "만족6", optionCount: 10, rank: 0 },
      { optionDescription: "만족7", optionCount: 1, rank: 0 },
      { optionDescription: "만족8", optionCount: 8, rank: 0 },
      { optionDescription: "만족9", optionCount: 2, rank: 0 },
      { optionDescription: "만족10", optionCount: 9, rank: 0 },
    ],
  },
  {
    id: 8,
    question: "당신의 직업에 얼마나 만족하나요?",
    options: [
      { optionDescription: "완전히 만족", optionCount: 10, rank: 0 },
      { optionDescription: "매우 만족", optionCount: 10, rank: 0 },
      { optionDescription: "꽤 만족", optionCount: 20, rank: 0 },
      { optionDescription: "보통", optionCount: 10, rank: 0 },
      { optionDescription: "꽤 불만족", optionCount: 30, rank: 0 },
      { optionDescription: "매우 불만족", optionCount: 5, rank: 0 },
      { optionDescription: "완전히 불만족", optionCount: 5, rank: 0 },
      { optionDescription: "모르겠다", optionCount: 10, rank: 0 },
    ],
  },
  {
    id: 9,
    question: "값 비싼 것을 소유하고, 부자가 되는 것을 중요하게 생각하나요?",
    options: [
      { optionDescription: "매우 그렇다", optionCount: 20, rank: 0 },
      { optionDescription: "그렇다", optionCount: 25, rank: 0 },
      { optionDescription: "그렇지 않다", optionCount: 15, rank: 0 },
      { optionDescription: "매우 그렇지 않다", optionCount: 20, rank: 0 },
      { optionDescription: "모르겠다", optionCount: 20, rank: 0 },
    ],
  },
  {
    id: 10,
    question:
      "어떤 위험 요소도 없는 안전한 삶을 사는 것을 중요하게 생각하나요?",
    options: [
      { optionDescription: "매우 그렇다", optionCount: 20, rank: 0 },
      { optionDescription: "그렇다", optionCount: 25, rank: 0 },
      { optionDescription: "그렇지 않다", optionCount: 15, rank: 0 },
      { optionDescription: "매우 그렇지 않다", optionCount: 20, rank: 0 },
      { optionDescription: "모르겠다", optionCount: 20, rank: 0 },
    ],
  },
  {
    id: 11,
    question: "다른 사람을 돕는 것을 중요하게 생각하나요?",
    options: [
      { optionDescription: "매우 그렇다", optionCount: 20, rank: 0 },
      { optionDescription: "그렇다", optionCount: 25, rank: 0 },
      { optionDescription: "그렇지 않다", optionCount: 15, rank: 0 },
      { optionDescription: "매우 그렇지 않다", optionCount: 20, rank: 0 },
      { optionDescription: "모르겠다", optionCount: 20, rank: 0 },
    ],
  },
  {
    id: 12,
    question: "항상 올바르게 행동하는 것을 중요하게 생각하나요?",
    options: [
      { optionDescription: "매우 그렇다", optionCount: 20, rank: 2 },
      { optionDescription: "그렇다", optionCount: 25, rank: 1 },
      { optionDescription: "그렇지 않다", optionCount: 15, rank: 3 },
      { optionDescription: "매우 그렇지 않다", optionCount: 20, rank: 2 },
      { optionDescription: "모르겠다", optionCount: 20, rank: 2 },
    ],
  },
];

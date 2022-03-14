export interface ResultData {
  id: number; // 키값, 번호
  question: string; // 질문
  result: AnswerObject[]; // 결과
}

export interface AnswerObject {
  answer: string; // 대답
  data: number; // 선택한 비율
  rank: number;
}

export const RESULT_DATA: ResultData[] = [
  {
    id: 1,
    question: "연령대",
    result: [
      { answer: "0-10", data: 1, rank: 0 },
      { answer: "10-20", data: 2, rank: 0 },
      { answer: "20-30", data: 80, rank: 0 },
      { answer: "30-40", data: 9, rank: 0 },
      { answer: "40-50", data: 2, rank: 0 },
      { answer: "50-60", data: 3, rank: 0 },
      { answer: "60-70", data: 2, rank: 0 },
      { answer: "70-80", data: 1, rank: 0 },
    ],
  },
  {
    id: 2,
    question: "성별",
    result: [
      { answer: "여성", data: 51, rank: 1 },
      { answer: "남성", data: 49, rank: 2 },
    ],
  },
  {
    id: 3,
    question: "희망연봉",
    result: [
      { answer: "2000-3000", data: 1, rank: 0 },
      { answer: "3000-4000", data: 19, rank: 0 },
      { answer: "4000-5000", data: 30, rank: 0 },
      { answer: "5000-6000", data: 30, rank: 0 },
      { answer: "6000-7000", data: 10, rank: 0 },
      { answer: "7000-8000", data: 5, rank: 0 },
      { answer: "8000-9000", data: 2, rank: 0 },
      { answer: "1억 이상", data: 3, rank: 0 },
    ],
  },
  {
    id: 4,
    question: "선호하는 근무 형태",
    result: [
      { answer: "재택근무", data: 70, rank: 1 },
      { answer: "출퇴근", data: 10, rank: 3 },
      { answer: "난 짱이라서 어디든 가능", data: 19, rank: 2 },
      { answer: "상관 없음", data: 1, rank: 4 },
    ],
  },
  {
    id: 5,
    question: "일할 때 즐겨마시는 드링크",
    result: [
      { answer: "커피류", data: 50, rank: 1 },
      { answer: "에너지음료", data: 30, rank: 2 },
      { answer: "물", data: 9, rank: 5 },
      { answer: "차", data: 11, rank: 4 },
      { answer: "기타", data: 30, rank: 2 },
    ],
  },
  {
    id: 6,
    question: "모바일 운영체제",
    result: [
      { answer: "iOS", data: 51, rank: 1 },
      { answer: "Andriod", data: 49, rank: 2 },
    ],
  },
  {
    id: 7,
    question: "모든 것을 고려했을 때, 요즘 당신의 삶은 얼마나 만족스러운가요?",
    result: [
      { answer: "모르겠다", data: 1, rank: 0 },
      { answer: "불만족1", data: 9, rank: 0 },
      { answer: "불만족2", data: 10, rank: 0 },
      { answer: "불만족3", data: 5, rank: 0 },
      { answer: "불만족4", data: 25, rank: 0 },
      { answer: "불만족5", data: 20, rank: 0 },
      { answer: "만족6", data: 10, rank: 0 },
      { answer: "만족7", data: 1, rank: 0 },
      { answer: "만족8", data: 8, rank: 0 },
      { answer: "만족9", data: 2, rank: 0 },
      { answer: "만족10", data: 9, rank: 0 },
    ],
  },
  {
    id: 8,
    question: "당신의 직업에 얼마나 만족하나요?",
    result: [
      { answer: "완전히 만족", data: 10, rank: 0 },
      { answer: "매우 만족", data: 10, rank: 0 },
      { answer: "꽤 만족", data: 20, rank: 0 },
      { answer: "보통", data: 10, rank: 0 },
      { answer: "꽤 불만족", data: 30, rank: 0 },
      { answer: "매우 불만족", data: 5, rank: 0 },
      { answer: "완전히 불만족", data: 5, rank: 0 },
      { answer: "모르겠다", data: 10, rank: 0 },
    ],
  },
  {
    id: 9,
    question: "값 비싼 것을 소유하고, 부자가 되는 것을 중요하게 생각하나요?",
    result: [
      { answer: "매우 그렇다", data: 20, rank: 0 },
      { answer: "그렇다", data: 25, rank: 0 },
      { answer: "그렇지 않다", data: 15, rank: 0 },
      { answer: "매우 그렇지 않다", data: 20, rank: 0 },
      { answer: "모르겠다", data: 20, rank: 0 },
    ],
  },
  {
    id: 10,
    question:
      "어떤 위험 요소도 없는 안전한 삶을 사는 것을 중요하게 생각하나요?",
    result: [
      { answer: "매우 그렇다", data: 20, rank: 0 },
      { answer: "그렇다", data: 25, rank: 0 },
      { answer: "그렇지 않다", data: 15, rank: 0 },
      { answer: "매우 그렇지 않다", data: 20, rank: 0 },
      { answer: "모르겠다", data: 20, rank: 0 },
    ],
  },
  {
    id: 11,
    question: "다른 사람을 돕는 것을 중요하게 생각하나요?",
    result: [
      { answer: "매우 그렇다", data: 20, rank: 0 },
      { answer: "그렇다", data: 25, rank: 0 },
      { answer: "그렇지 않다", data: 15, rank: 0 },
      { answer: "매우 그렇지 않다", data: 20, rank: 0 },
      { answer: "모르겠다", data: 20, rank: 0 },
    ],
  },
  {
    id: 12,
    question: "항상 올바르게 행동하는 것을 중요하게 생각하나요?",
    result: [
      { answer: "매우 그렇다", data: 20, rank: 2 },
      { answer: "그렇다", data: 25, rank: 1 },
      { answer: "그렇지 않다", data: 15, rank: 3 },
      { answer: "매우 그렇지 않다", data: 20, rank: 2 },
      { answer: "모르겠다", data: 20, rank: 2 },
    ],
  },
];

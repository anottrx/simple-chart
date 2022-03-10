export interface ResultData {
  id: number; // 키값
  gender: string; // 성별
  age: string; // 연령대
  salary: string; // 희망연봉
  workplace: string; // 선호하는 근무 형태(재택근무, 출근)
  drinks: string; // 일할 때 즒겨마시는 음료 (커피, 차, 에너지드링크 등)
  mobile: string; // 사용하는 모바일 (iOS, Anroid)
}

export const RESULT_DATA: ResultData[] = [
  {
    id: 1,
    gender: "male",
    age: "20대",
    salary: "3000만원 ~ 3500만원",
    workplace: "재택근무",
    drinks: "커피",
    mobile: "iOS",
  },
  {
    id: 2,
    gender: "female",
    age: "30대",
    salary: "4000만원 ~ 4500만원",
    workplace: "출근",
    drinks: "에너지드링크",
    mobile: "Android",
  },
  {
    id: 3,
    gender: "male",
    age: "20대",
    salary: "3500만원 ~ 4000만원",
    workplace: "재택근무",
    drinks: "차",
    mobile: "iOS",
  },
  {
    id: 4,
    gender: "female",
    age: "20대",
    salary: "3000만원 ~ 3500만원",
    workplace: "재택근무",
    drinks: "기타",
    mobile: "iOS",
  },
];

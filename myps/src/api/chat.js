import { get, post } from "./example";

export const startChat = async (memberId, caseExamId, patientId, message) => {
  const url = `/api/chats/message`;
  const data = { memberId, caseExamId, patientId, message };
  try {
    const res = await post(url, data);
    console.log("채팅 성공: ", res);
    return res;
  } catch (error) {
    console.error("채팅 실패:", error);
    throw error;
  }
};

export const getChecklist = async (caseExamId) => {
  const url = `api/checklist/${caseExamId}`;
  try {
    const res = await get(url);
    console.log("체크리스트 조회 성공: ", res);
    return res;
  } catch (error) {
    console.log("체크리스트 조회 실패: ", error);
    throw error;
  }
};

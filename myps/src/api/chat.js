import { post } from "./example";

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

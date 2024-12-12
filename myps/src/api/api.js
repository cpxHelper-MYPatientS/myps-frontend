import axios from "axios";
// import { postAccessTokenIssue } from "./oauth";

/* 로컬스토리지에서 토큰 정보 가져오기*/
// const token = JSON.parse(localStorage.getItem("token"));
// const accessToken = token?.accessToken || null;
// const auth = accessToken ? `Bearer ${accessToken}` : null;

/* 인증 필요 없는 요청*/
export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

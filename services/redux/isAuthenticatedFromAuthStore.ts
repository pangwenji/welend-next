import { AuthRecord } from "../../reducers/authReducer";

export default (auth: AuthRecord): boolean => {
  if (!auth) { return false; }
  const token = auth.get("token");
  if (!token) { return false; }
  return token && new Date().getTime() < token.expiresAt;
};

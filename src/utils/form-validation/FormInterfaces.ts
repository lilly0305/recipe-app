export interface ILoginForm {
  user_id: string;
  user_pw: string;
  keep_signed_in?: boolean;
}

export interface IJoinForm {
  user_id: string;
  user_pw: string;
  user_re_pw: string;
  nickname: string;
  email?: string;
}

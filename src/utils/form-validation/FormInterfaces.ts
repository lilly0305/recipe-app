export interface ILoginForm {
  user_id: string;
  user_pw: string;
  keep_signed_in?: boolean;
}

export interface IJoinForm {
  nickname?: string;
  email: string;
  user_id: string;
  user_pw: string;
  user_re_pw: string;
}

export interface IFindAccount {
  email: string;
}

export interface IChangePassword {
  user_pw: string;
  user_re_pw: string;
}

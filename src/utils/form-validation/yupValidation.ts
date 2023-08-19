import * as Yup from 'yup';

import {
  userIdErrorMessage,
  userPwErrorMessage,
  WrongUserPwErrorMessage,
  wrongUserIdErrorMessage,
  WrongUserRePwErrorMessage,
  userRePwErrorMessage,
} from './formErrorMessage';

const USER_ID_REGEX = /(?=.*\d)(?=.*[a-z]).{6,}/;
const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z]).{8,}/;

export const yupLogin = Yup.object().shape({
  user_id: Yup.string()
    .required(userIdErrorMessage)
    .matches(USER_ID_REGEX, wrongUserIdErrorMessage),
  user_pw: Yup.string()
    .required(userPwErrorMessage)
    .matches(PASSWORD_REGEX, WrongUserPwErrorMessage),
});

export const yupJoin = Yup.object().shape({
  user_id: Yup.string()
    .required(userIdErrorMessage)
    .matches(USER_ID_REGEX, wrongUserIdErrorMessage),
  user_pw: Yup.string()
    .required(userPwErrorMessage)
    .matches(PASSWORD_REGEX, WrongUserPwErrorMessage),
  user_re_pw: Yup.string()
    .required(userRePwErrorMessage)
    .oneOf([Yup.ref('user_pw')], WrongUserRePwErrorMessage),
  nickname: Yup.string().required(userIdErrorMessage),
});

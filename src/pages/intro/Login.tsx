import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  RiAppleFill,
  RiEyeFill,
  RiEyeOffLine,
  RiGoogleFill,
  RiKakaoTalkFill,
  RiLock2Fill,
  RiLockUnlockLine,
  RiUser5Fill,
  RiUser5Line,
} from 'react-icons/ri';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from '@emotion/styled';

import { PrimaryButton } from '@components/buttons';
import { CheckBox, TextInput } from '@components/inputs';
import { yupLogin } from '@utils/form-validation/yupValidation';
import { ILoginForm } from '@utils/form-validation/FormInterfaces';
import { userIdPlaceholder, userPwPlaceholder } from '@utils/form-validation/placeholder';

import AppTheme from 'theme';

const Form = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const LoginBottomWrapper = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.4rem',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '0.4rem',
}));

export const LostAccount = styled.button(({ theme }) => ({
  borderBottom: `1px solid ${theme.color.siteBlack}`,
  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    borderBottom: `1px solid ${theme.color.sitePrimaryBlue}`,
    color: theme.color.sitePrimaryBlue,
  },
}));

export const SnsLoginWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0 3rem',
  margin: '3rem 0',
  color: theme.color.forthBlack,

  svg: {
    cursor: 'pointer',
    transition: 'all 0.3s',

    '&:hover': {
      '&:first-of-type': {
        color: '#FEE500',
      },

      '&:nth-of-type(2)': {
        color: '#4285F4',
      },

      '&:last-of-type': {
        color: '#000000',
      },
    },
  },
}));

interface ILogin {
  handleOpenModal: () => void;
}
function Login({ handleOpenModal }: ILogin) {
  const [showPw, setShowPw] = useState(false);

  const { handleSubmit, control } = useForm<ILoginForm>({
    resolver: yupResolver(yupLogin),
    mode: 'onChange',
    defaultValues: {
      user_id: '',
      user_pw: '',
      keep_signed_in: false,
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = useCallback((data) => {
    console.log(data);
  }, []);

  const showPwHandler = useCallback(() => {
    setShowPw((prev) => !prev);
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="user_id"
        control={control}
        render={({ field, fieldState: { isDirty, invalid, error } }) => {
          return (
            <TextInput
              {...field}
              fieldProps={{
                isValid: isDirty && !invalid,
                prefix: <RiUser5Line />,
                validPrefix: <RiUser5Fill />,

                placeholder: userIdPlaceholder,
                error: error,
              }}
            />
          );
        }}
      />

      <Controller
        name="user_pw"
        control={control}
        render={({ field, fieldState: { invalid, error, isDirty } }) => {
          return (
            <TextInput
              {...field}
              fieldProps={{
                isValid: isDirty && !invalid,
                prefix: <RiLockUnlockLine />,
                validPrefix: <RiLock2Fill />,
                placeholder: userPwPlaceholder,
                inputType: showPw ? 'text' : 'password',
                error: error,
                suffix: isDirty ? (
                  <button type="button" onClick={showPwHandler}>
                    {showPw ? (
                      <RiEyeFill fill={AppTheme.color.sitePrimaryBlue} />
                    ) : (
                      <RiEyeOffLine fill={AppTheme.color.borderOne} />
                    )}
                  </button>
                ) : undefined,
              }}
            />
          );
        }}
      />

      <LoginBottomWrapper>
        <Controller
          name="keep_signed_in"
          control={control}
          render={({ field }) => {
            return <CheckBox {...field} fieldProps={{ label: '로그인 30일간 유지' }} />;
          }}
        />

        <LostAccount type="button" onClick={handleOpenModal}>
          계정을 잃어버리셨나요?
        </LostAccount>
      </LoginBottomWrapper>

      <SnsLoginWrapper>
        <RiKakaoTalkFill size={30} />

        <RiGoogleFill size={30} />

        <RiAppleFill size={30} />
      </SnsLoginWrapper>

      <PrimaryButton type="submit">로그인</PrimaryButton>
    </Form>
  );
}

export default Login;

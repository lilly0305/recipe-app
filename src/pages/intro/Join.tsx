import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  RiAppleFill,
  RiEyeFill,
  RiEyeOffLine,
  RiGoogleFill,
  RiKakaoTalkFill,
  RiLockUnlockLine,
  RiUser5Line,
} from 'react-icons/ri';

import { TextInput } from '@components/inputs';
import { IJoinForm } from '@utils/form-validation/FormInterfaces';
import { yupJoin } from '@utils/form-validation/yupValidation';
import {
  userIdPlaceholder,
  userPwPlaceholder,
  userRePwPlaceholder,
} from '@utils/form-validation/placeholder';
import AppTheme from 'theme';
import { SnsLoginWrapper } from './Login';
import { PrimaryButton } from '@components/buttons';

const Form = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  transform: 'rotateY(180deg)',
}));

function Join() {
  const [showPw, setShowPw] = useState({
    pw: false,
    re_pw: false,
  });

  const { handleSubmit, control } = useForm<IJoinForm>({
    resolver: yupResolver(yupJoin),
    defaultValues: {
      user_id: '',
      user_pw: '',
      user_re_pw: '',
      nickname: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<IJoinForm> = useCallback((data) => {
    console.log(data);
  }, []);

  const showPwHandler = useCallback((type: string) => {
    setShowPw((prev) => ({ ...prev, [type]: !prev }));
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="user_id"
        control={control}
        render={({ field, formState: { errors } }) => (
          <TextInput
            {...field}
            fieldProps={{
              prefix: <RiUser5Line size={20} />,
              placeholder: userIdPlaceholder,
              errorMessage: errors.user_id?.message,
            }}
          />
        )}
      />

      <Controller
        name="user_pw"
        control={control}
        render={({ field, formState: { errors, isDirty } }) => {
          return (
            <TextInput
              {...field}
              fieldProps={{
                prefix: <RiLockUnlockLine size={20} />,
                placeholder: userPwPlaceholder,
                errorMessage: errors.user_pw?.message,
                inputType: showPw.pw ? 'text' : 'password',
                suffix: isDirty ? (
                  <button type="button" onClick={() => showPwHandler('pw')}>
                    {showPw.pw ? (
                      <RiEyeFill size={20} fill={AppTheme.color.sitePrimaryBlue} />
                    ) : (
                      <RiEyeOffLine size={20} fill={AppTheme.color.borderOne} />
                    )}
                  </button>
                ) : undefined,
              }}
            />
          );
        }}
      />

      <Controller
        name="user_re_pw"
        control={control}
        render={({ field, formState: { errors, isDirty } }) => {
          return (
            <TextInput
              {...field}
              fieldProps={{
                prefix: <RiLockUnlockLine size={20} />,
                placeholder: userRePwPlaceholder,
                errorMessage: errors.user_re_pw?.message,
                inputType: showPw.re_pw ? 'text' : 'password',
                suffix: isDirty ? (
                  <button type="button" onClick={() => showPwHandler('re_pw')}>
                    {showPw.re_pw ? (
                      <RiEyeFill size={20} fill={AppTheme.color.sitePrimaryBlue} />
                    ) : (
                      <RiEyeOffLine size={20} fill={AppTheme.color.borderOne} />
                    )}
                  </button>
                ) : undefined,
              }}
            />
          );
        }}
      />

      <SnsLoginWrapper>
        <RiKakaoTalkFill size={30} />

        <RiGoogleFill size={30} />

        <RiAppleFill size={30} />
      </SnsLoginWrapper>

      <PrimaryButton type="submit">회원가입</PrimaryButton>
    </Form>
  );
}

export default Join;

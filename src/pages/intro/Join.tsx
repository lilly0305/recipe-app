import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  RiAppleFill,
  RiAtFill,
  RiAtLine,
  RiEmojiStickerFill,
  RiEmojiStickerLine,
  RiEyeFill,
  RiEyeOffLine,
  RiGoogleFill,
  RiKakaoTalkFill,
  RiLock2Fill,
  RiLockUnlockLine,
  RiUser5Fill,
  RiUser5Line,
} from 'react-icons/ri';

import { TextInput } from '@components/inputs';
import { PrimaryButton } from '@components/buttons';
import { IJoinForm } from '@utils/form-validation/FormInterfaces';
import { yupJoin } from '@utils/form-validation/yupValidation';
import {
  emailPlaceholder,
  nicknamePlaceholder,
  userIdPlaceholder,
  userPwPlaceholder,
  userRePwPlaceholder,
} from '@utils/form-validation/placeholder';
import AppTheme from 'theme';

import { SnsLoginWrapper } from './Login';
import { Modal } from 'antd';

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  transform: 'rotateY(180deg)',
}));

interface IJoin {
  setJoin: Dispatch<SetStateAction<boolean>>;
}
function Join({ setJoin }: IJoin) {
  const [modal, contextHolder] = Modal.useModal();

  interface IShowPw {
    [key: string]: boolean;
  }
  const [showPw, setShowPw] = useState<IShowPw>({
    pw: false,
    re_pw: false,
  });

  const { handleSubmit, control } = useForm<IJoinForm>({
    resolver: yupResolver(yupJoin),
    mode: 'onChange',
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

    modal.success({
      title: '회원가입이 완료되었습니다 :)',
      content: '로그인하신 후 서비스를 이용해보세요!',
      onOk() {
        setJoin(false);
      },
    });
  }, []);

  const showPwHandler = useCallback((type: string) => {
    setShowPw((prev) => ({ ...prev, [type]: !prev[type] }));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {contextHolder}

      <Wrapper>
        <Controller
          name="nickname"
          control={control}
          render={({ field, fieldState: { isDirty, invalid, error } }) => {
            return (
              <TextInput
                {...field}
                fieldProps={{
                  isValid: isDirty && !invalid,
                  prefix: <RiEmojiStickerLine />,
                  validPrefix: <RiEmojiStickerFill />,
                  placeholder: nicknamePlaceholder,
                  error: error,
                }}
              />
            );
          }}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { isDirty, invalid, error } }) => {
            return (
              <TextInput
                {...field}
                fieldProps={{
                  isValid: isDirty && !invalid,
                  prefix: <RiAtLine />,
                  validPrefix: <RiAtFill />,
                  placeholder: emailPlaceholder,
                  error: error,
                }}
              />
            );
          }}
        />

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
                  error: error,
                  inputType: showPw.pw ? 'text' : 'password',
                  suffix: isDirty ? (
                    <button type="button" onClick={() => showPwHandler('pw')}>
                      {showPw.pw ? (
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

        <Controller
          name="user_re_pw"
          control={control}
          render={({ field, fieldState: { invalid, error, isDirty } }) => {
            return (
              <TextInput
                {...field}
                fieldProps={{
                  isValid: isDirty && !invalid,
                  prefix: <RiLockUnlockLine />,
                  validPrefix: <RiLock2Fill />,
                  placeholder: userRePwPlaceholder,
                  error: error,
                  inputType: showPw.re_pw ? 'text' : 'password',
                  suffix: isDirty ? (
                    <button type="button" onClick={() => showPwHandler('re_pw')}>
                      {showPw.re_pw ? (
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

        <SnsLoginWrapper>
          <RiKakaoTalkFill size={30} />

          <RiGoogleFill size={30} />

          <RiAppleFill size={30} />
        </SnsLoginWrapper>
      </Wrapper>

      <PrimaryButton type="submit" custom={{ transform: 'translateX(-50%) rotateY(180deg)' }}>
        회원가입
      </PrimaryButton>
    </form>
  );
}

export default Join;

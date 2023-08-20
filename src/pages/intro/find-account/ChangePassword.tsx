import React, { useCallback, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RiEyeFill, RiEyeOffLine, RiLock2Fill, RiLockUnlockLine } from 'react-icons/ri';
import { Button } from 'antd';
import styled from '@emotion/styled';

import { H6, P3M } from '@assets/styles/TextStyles';
import { CommonMemoContainer } from '@assets/styles/ContainerStyles';
import { TextInput } from '@components/inputs';
import { IChangePassword } from '@utils/form-validation/FormInterfaces';
import { yupChangePassword } from '@utils/form-validation/yupValidation';
import { userPwPlaceholder, userRePwPlaceholder } from '@utils/form-validation/placeholder';
import AppTheme from 'theme';

import { FormContainer } from './FindAccount';

const Form = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}));

const ButtonWrapper = styled.div(() => ({
  marginTop: '5rem',
}));

const FoundId = styled(H6)(({ theme }) => ({
  marginBottom: '3rem',

  '&>strong': {
    fontWeight: theme.fontWeight.extraBold,
    color: theme.color.sitePrimaryBlue,
  },
}));

interface IChangePasswordProps {
  nextStep: () => void;
  prevStep: () => void;
}
function ChangePassword({ nextStep, prevStep }: IChangePasswordProps) {
  interface IShowPw {
    [key: string]: boolean;
  }
  const [showPw, setShowPw] = useState<IShowPw>({
    pw: false,
    re_pw: false,
  });
  const { handleSubmit, control } = useForm<IChangePassword>({
    resolver: yupResolver(yupChangePassword),
    mode: 'onChange',
    defaultValues: {
      user_pw: '',
      user_re_pw: '',
    },
  });

  const onSubmit: SubmitHandler<IChangePassword> = useCallback((data) => {
    console.log(data);
    nextStep();
  }, []);

  const showPwHandler = useCallback((type: string) => {
    setShowPw((prev) => ({ ...prev, [type]: !prev[type] }));
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CommonMemoContainer>
        <FormContainer>
          <FoundId>
            해당 이메일로 가입되 아이디는 <strong>yhk0305</strong> 입니다.
            <P3M>비밀번호를 새롭게 설정하세요.</P3M>
          </FoundId>

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
        </FormContainer>
      </CommonMemoContainer>

      <ButtonWrapper>
        <Button style={{ margin: '0 8px' }} onClick={() => prevStep()}>
          이전
        </Button>

        <Button htmlType="submit" type="primary">
          다음
        </Button>
      </ButtonWrapper>
    </Form>
  );
}

export default ChangePassword;

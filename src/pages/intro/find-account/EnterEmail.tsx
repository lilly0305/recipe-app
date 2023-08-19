import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { RiAtFill, RiAtLine } from 'react-icons/ri';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'antd';
import styled from '@emotion/styled';

import { TextInput } from '@components/inputs';
import { IFindAccount } from '@utils/form-validation/FormInterfaces';
import { yupFindAccount } from '@utils/form-validation/yupValidation';
import { emailPlaceholder } from '@utils/form-validation/placeholder';

import { FormContainer } from './FindAccount';

const Form = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
}));

interface IEnterEmail {
  nextStep: () => void;
  setStepStatus: Dispatch<SetStateAction<'error' | 'wait' | 'process' | 'finish' | undefined>>;
  stepStatus: string | undefined;
}
function EnterEmail({ nextStep, setStepStatus }: IEnterEmail) {
  const { handleSubmit, control, setError } = useForm<IFindAccount>({
    resolver: yupResolver(yupFindAccount),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<IFindAccount> = useCallback((data) => {
    console.log(data);

    if (data.email === 'lilly@itdadev.com') {
      setStepStatus('error');
      setError('email', { message: '일치하는 계정이 없습니다.' });

      return;
    }
    setStepStatus('process');
    nextStep();
  }, []);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
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
      </FormContainer>

      <Button htmlType="submit" type="primary">
        다음
      </Button>
    </Form>
  );
}

export default EnterEmail;

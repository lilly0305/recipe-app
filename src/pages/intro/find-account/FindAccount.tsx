import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { Modal, Steps } from 'antd';
import styled from '@emotion/styled';
import { RiAtLine, RiLockPasswordLine, RiShieldCheckLine } from 'react-icons/ri';

import EnterEmail from './EnterEmail';
import ChangePassword from './ChangePassword';
import FindAccountDone from './FindAccountDone';
import { mq } from '@utils/media-query/mediaQuery';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0 5rem',

  [mq('desktop')]: {
    flexDirection: 'row',
  },
}));

export const FormContainer = styled.div(() => ({
  maxWidth: '50rem',
  minWidth: '36rem',
  marginBottom: '5rem',

  [mq('desktop')]: {
    minWidth: '50rem',
  },
}));

export interface ISteps {
  title: string;
  status: string;
  icon: React.ReactElement;
}

interface IFindAccount {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
function FindAccount({ open, setOpen }: IFindAccount) {
  const [current, setCurrent] = useState<number>(0);
  const [stepStatus, setStepStatus] = useState<
    'error' | 'wait' | 'process' | 'finish' | undefined
  >();

  const nextStep = () => {
    setCurrent(current + 1);
  };

  const prevStep = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: '이메일을 입력해주세요.',
      icon: <RiAtLine size={20} />,
    },
    {
      title: '아이디 확인 및 비밀번호 변경하기',
      icon: <RiLockPasswordLine size={20} />,
    },
    {
      title: '계정 변경 완료',
      icon: <RiShieldCheckLine size={20} />,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const handleOk = useCallback(() => {
    setOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    setOpen(false);
    setCurrent(0);
    setStepStatus('process');
  }, []);

  const StepsComponents = [
    {
      components: (
        <EnterEmail nextStep={nextStep} setStepStatus={setStepStatus} stepStatus={stepStatus} />
      ),
    },
    {
      components: <ChangePassword nextStep={nextStep} prevStep={prevStep} />,
    },
    {
      components: <FindAccountDone handleCancel={handleCancel} />,
    },
  ];

  return (
    <Modal
      open={open}
      title="계정 찾기"
      onOk={handleOk}
      onCancel={handleCancel}
      width="fit-content"
      footer={null}
    >
      <Container>
        <Steps
          direction="vertical"
          size="small"
          status={stepStatus}
          current={current}
          items={items}
        />

        {StepsComponents[current].components}
      </Container>
    </Modal>
  );
}

export default FindAccount;

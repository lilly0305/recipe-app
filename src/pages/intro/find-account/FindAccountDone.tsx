import React from 'react';
import { Button, Result } from 'antd';

interface IFindAccount {
  handleCancel: () => void;
}
function FindAccountDone({ handleCancel }: IFindAccount) {
  return (
    <Result
      style={{ whiteSpace: 'nowrap', padding: '0 2rem 4rem' }}
      status="success"
      title="비밀번호가 변경되었습니다!"
      subTitle="새로운 비밀번호로 로그인해주세요."
      extra={
        <Button type="primary" onClick={handleCancel}>
          로그인하기
        </Button>
      }
    />
  );
}

export default FindAccountDone;

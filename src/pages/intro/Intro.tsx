import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { CommonContainer } from '@assets/styles/CommonStyles';

import Login from './Login';
import Join from './Join';
import { image } from 'theme';
import { H2, H5 } from '@assets/styles/TextStyles';
import { RiArrowGoBackFill } from 'react-icons/ri';

const Container = styled.div(({ theme }) => ({
  backgroundImage: `url(${theme.image.moLoginBg.default})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  backgroundPosition: 'top center',
  height: '100vh',
  paddingTop: '2rem',
  textAlign: 'center',
}));

const Texts = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  margin: '3.6rem 0',
}));

const LogoImage = styled.img(() => ({
  width: '8rem',
}));

interface IFormWrapper {
  join: boolean;
}
const FormWrapper = styled.div<IFormWrapper>(({ theme, join }) => ({
  position: 'relative',
  padding: '6rem 1.6rem',
  background: theme.color.white,
  boxShadow: theme.shadow.primary,
  transform: join ? 'rotateY(180deg)' : 'rotateY(0)',
  transition: 'transform 0.5s',
}));

const FormSwichButton = styled.button(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0 0.8rem',
  background: 'transparent',
  justifyContent: 'center',
  marginTop: '5rem',
  textAlign: 'center',
  width: '100%',
}));

function Intro() {
  const [join, setJoin] = useState<boolean>(false);

  const theme = useTheme();

  return (
    <Container>
      <CommonContainer>
        <LogoImage src={image.dummyLogo.default} alt="" />

        <Texts>
          <H2 color={theme.color.sitePrimaryBlue}>반가워요 :)</H2>

          <H5>
            <p>회원가입 또는 로그인을 하시고</p> <p>서비스를 이용해보세요.</p>
          </H5>
        </Texts>

        <FormWrapper join={join}>{join ? <Join /> : <Login />}</FormWrapper>
      </CommonContainer>

      <FormSwichButton onClick={() => setJoin(!join)}>
        <RiArrowGoBackFill size={20} />

        {join ? '로그인' : '회원가입'}
      </FormSwichButton>
    </Container>
  );
}

export default Intro;

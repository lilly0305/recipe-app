import React, { useCallback, useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { RiArrowGoBackFill } from 'react-icons/ri';

import { H2, H5 } from '@assets/styles/TextStyles';
import { CommonContainer } from '@assets/styles/CommonStyles';
import { mq } from '@utils/media-query/mediaQuery';
import { image } from 'theme';

import Login from './Login';
import Join from './Join';
import { FindAccount } from './find-account';

const Container = styled.div(({ theme }) => ({
  backgroundImage: `url(${theme.image.moLoginBg.default})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundSize: '100%',
  height: '100%',
  minHeight: '100vh',
  padding: '2rem 0 5rem',
  textAlign: 'center',

  [(mq('desktop'), mq('tablet'))]: {
    backgroundImage: `url(${theme.image.pcLoginBg.default})`,
    backgroundPosition: 'center right',
    backgroundSize: 'auto 80%',
  },
}));

const Wrapper = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [(mq('desktop'), mq('tablet'))]: {
    alignItems: 'flex-start',
  },
}));

const FormAll = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '50rem',
  margin: '0 auto',

  [(mq('desktop'), mq('tablet'))]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
    margin: 0,
  },
}));

const Texts = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem 0',
  margin: '3.6rem 0',

  [(mq('desktop'), mq('tablet'))]: {
    alignItems: 'flex-start',
    textAlign: 'left',
  },
}));

const LogoImage = styled.img(() => ({
  width: '8rem',
}));

interface IFormWrapper {
  join: boolean;
}
const FormWrapper = styled.div<IFormWrapper>(({ theme, join }) => ({
  position: 'relative',
  width: '100%',
  padding: '6rem 1.6rem',
  background: theme.color.white,
  boxShadow: theme.shadow.primary,
  transform: join ? 'rotateY(180deg)' : 'rotateY(0)',
  transition: 'transform 0.5s',

  [(mq('desktop'), mq('tablet'))]: {
    maxWidth: '50rem',
  },
}));

const FormSwichButton = styled.button(() => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0 0.8rem',
  background: 'transparent',
  justifyContent: 'center',
  marginTop: '5rem',
  textAlign: 'center',
  width: 'fit-content',

  [(mq('desktop'), mq('tablet'))]: {
    marginTop: 0,
    marginBottom: '1rem',
  },
}));

function Intro() {
  const [open, setOpen] = useState<boolean>(false);
  const [join, setJoin] = useState<boolean>(false);

  const theme = useTheme();

  const handleOpenModal = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <Container>
      <FindAccount open={open} setOpen={setOpen} />

      <CommonContainer>
        <Wrapper>
          <LogoImage src={image.dummyLogo.default} alt="" />

          <Texts>
            <H2 color={theme.color.sitePrimaryBlue}>반가워요 :)</H2>

            <H5>
              <p>회원가입 또는 로그인을 하시고</p>

              <p>서비스를 이용해보세요.</p>
            </H5>
          </Texts>

          <FormAll>
            <FormWrapper join={join}>
              {join ? <Join setJoin={setJoin} /> : <Login handleOpenModal={handleOpenModal} />}
            </FormWrapper>

            <FormSwichButton onClick={() => setJoin(!join)}>
              <RiArrowGoBackFill size={20} />

              {join ? '로그인' : '회원가입'}
            </FormSwichButton>
          </FormAll>
        </Wrapper>
      </CommonContainer>
    </Container>
  );
}

export default Intro;

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import { API } from '../../api/api';
import HandImage from '../../assets/svg/hand.svg';
import { Card } from '../../components/card';
import { MainLayout } from '../../components/layouts';
import { Text } from '../../components/text';
import { Expert } from '../../types/experts';

export default function Advisor({ data }: { data: Expert }) {
  return (
    <>
      <Head>
        <title>{data.name} advisor</title>
        <meta name='description' content='Nebula Experts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <MainLayout>
        <Container>
          <Card
            id={data.id}
            name={data.name}
            image={data.image}
            slogan={data.slogan}
            status={data.status}
            showLinks={false}
            experience={data.experience}
            total_orders={data.total_orders}
            specializations={data.specializations}
          />
        </Container>
        <Description>
          <Container>
            <About>
              <Text variant='h3'>About me</Text>
            </About>

            <Wrapper>
              <Info>
                <Title>Bio</Title>
                <Text size='small' color='second-white'>
                  {data.description}
                </Text>
              </Info>

              <Image src={HandImage} alt='Magic hand' />
            </Wrapper>
          </Container>
        </Description>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await API.getExpertById(context.query.id as string);

  return {
    props: { data },
  };
};

const Container = styled.div`
  padding: 0 150px;

  @media (max-width: 480px) {
    padding: 0px 15px 15px 15px;
  }
`;

const Description = styled.div`
  margin-top: 80px;
  width: 100%;

  background: #24244f;
  padding: 80px 0px;

  @media (max-width: 480px) {
    margin-top: 40px;
    padding: 40px 0px;
  }
`;

const About = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    h3 {
      font-size: 22px;
    }
  }
`;

const Info = styled.div``;

const Title = styled.h5`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #fafafa;
  margin-left: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background: linear-gradient(90.6deg, #6a4dbc 0.47%, #f2994a 137.94%);
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;

  p {
    text-align: justify;
  }

  img {
    margin-left: 90px;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    align-items: center;

    img {
      margin: 0;
      width: 122px;
      height: 160px;
    }
  }
`;

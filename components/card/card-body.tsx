import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import ArrowImage from '../../assets/svg/arrow.svg';
import ConsultationImage from '../../assets/svg/consultation.svg';
import HeartImage from '../../assets/svg/heart.svg';
import { Avatar } from '../avatar';
import { Chip } from '../chip';
import { Text } from '../text';
import { CardProps } from './card';

type CardBodyProps = CardProps;

export const CardBody = ({
  id,
  image,
  name,
  status,
  specializations,
  slogan,
  experience,
  total_orders,
  showLinks = true,
}: CardBodyProps) => {
  return (
    <CardBodyRoot>
      <Wrapper>
        <Avatar src={image} status={status} />
        <Description>
          {showLinks && (
            <Arrow>
              <Link href={`advisor/${id}`}>
                <Image src={ArrowImage} alt='Arrow' />
              </Link>
            </Arrow>
          )}
          <Text variant='h4'>{name}</Text>

          <Chips>
            {specializations &&
              specializations.map((item) => {
                return (
                  <Chip key={item.id} variant='negative'>
                    {item.name}
                  </Chip>
                );
              })}
          </Chips>

          <List>
            <ListItem>
              <Image src={HeartImage} alt='heart icon' />

              <Text size='small'>
                <Text weight='big' variant='span'>
                  {experience} years
                </Text>
                of experience
              </Text>
            </ListItem>

            <ListItem>
              <Image src={ConsultationImage} alt='consultations icon' />

              <Text size='small'>
                <Text weight='big' variant='span'>
                  {total_orders}
                </Text>
                consultations done
              </Text>
            </ListItem>
          </List>
        </Description>
      </Wrapper>

      <Wrapper>
        <About>
          <Text weight='big'>About me</Text>
        </About>

        <Slogan>
          <Text size='small'>{slogan}</Text>
        </Slogan>
      </Wrapper>
    </CardBodyRoot>
  );
};

const CardBodyRoot = styled.div`
  width: 75%;
  padding: 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 16px;
    gap: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const Description = styled.div`
  margin-left: 24px;
  width: 85%;

  @media (max-width: 480px) {
    width: 100%;
    margin-left: 14px;
    h4 {
      font-size: 18px;
    }
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 21px;

  @media (max-width: 480px) {
    margin: 1px 0px 8px 0px;
    height: 2.9rem;
    overflow: hidden;
    div {
      font-size: 10px;
    }
  }
`;

const About = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    width: 88px;
    display: none;
  }
`;

const Slogan = styled.div`
  margin-left: 24px;
  width: 75%;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  p,
  span {
    font-size: 12px;
    margin-right: 5px;
  }

  img {
    width: 18px;
    height: 15px;
    margin-right: 12px;
  }
`;

const Arrow = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    width: 100%;
    display: flex;
    justify-content: end;
  }
`;

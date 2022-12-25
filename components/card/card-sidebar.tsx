import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import ConsultationImage from '../../assets/svg/consultation.svg';
import HeartImage from '../../assets/svg/heart.svg';
import SmallArrowImage from '../../assets/svg/small-arrow.svg';
import { Text } from '../text';
import { CardProps } from './card';

type CardSidebarProps = Pick<CardProps, 'experience' | 'total_orders' | 'showLinks' | 'id'>;

export const CardSidebar = ({ id, experience, total_orders, showLinks = true }: CardSidebarProps) => {
  return (
    <Sidebar>
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

      {showLinks && (
        <Link href={`advisor/${id}`}>
          <Text weight='big' size='small' color='purple'>
            View full profile
          </Text>
          <Image src={SmallArrowImage} alt='Link arrow' />
        </Link>
      )}
    </Sidebar>
  );
};

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  width: 25%;
  padding: 36px 22px 22px 22px;

  background: #141333;

  a {
    display: flex;
    align-items: center;
    img {
      margin-left: 5px;
    }
  }

  @media (max-width: 480px) {
    display: none;
    width: 100%;
    padding: 0;
    background: inherit;
    margin-left: 100px;
    a {
      display: none;
    }
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 54px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;

  p,
  span {
    margin-right: 5px;
  }

  img {
    margin-right: 12px;
  }
`;

import styled from 'styled-components';

import { SpecializationsEntity } from '../../types/experts';
import { CardBody } from './card-body';
import { CardSidebar } from './card-sidebar';

export type CardProps = {
  id: string;
  name: string;
  image: string;
  slogan: string;
  status: string;
  experience: number;
  total_orders: number;
  specializations: SpecializationsEntity[] | null | undefined;
  showLinks?: boolean;
};

export const Card = ({ id, experience, total_orders, showLinks, ...props }: CardProps) => {
  return (
    <CardRoot>
      <CardBody id={id} experience={experience} total_orders={total_orders} showLinks={showLinks} {...props} />
      <CardSidebar id={id} experience={experience} total_orders={total_orders} showLinks={showLinks} />
    </CardRoot>
  );
};

const CardRoot = styled.li`
  width: 100%;

  background: #24244f;
  border-radius: 16px;
  border: 2px solid #24244f;
  display: flex;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

/* eslint-disable no-unused-vars */
import Image from 'next/image';
import styled from 'styled-components';

import ArrowImage from '../../assets/svg/pagination-arrow.svg';

type PaginationProps = {
  currentPage: number;
  perPage: number;
  total: number;
  onPageChange(pageNumber: number): void;
  onPrevPage(): void;
  onNextPage(): void;
};

export const Pagination = ({ perPage, total, currentPage, onPageChange, onPrevPage, onNextPage }: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationRoot>
      {currentPage !== pageNumbers.at(0) && (
        <Prev onClick={onPrevPage}>
          <Image src={ArrowImage} alt='Prev page' />
        </Prev>
      )}
      {pageNumbers.map((item, key) => {
        return (
          <Item key={key} active={currentPage === item} onClick={() => onPageChange(item)}>
            {item}
          </Item>
        );
      })}
      {currentPage !== pageNumbers.at(-1) && (
        <Next onClick={onNextPage}>
          <Image src={ArrowImage} alt='Prev page' />
        </Next>
      )}
    </PaginationRoot>
  );
};

const PaginationRoot = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  font-weight: 600;
  font-size: 16px;
  color: #f2f3fd;
  li {
    cursor: pointer;
  }

  @media (max-width: 480px) {
    margin: 40px 0;
  }
`;

const Item = styled.li<{ active: boolean }>`
  position: relative;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    left: 0;
    bottom: -10px;
    background: ${({ active }) => active && '#8e8cf0'};
    transition: all 0.2s ease-in;
  }
`;

const Prev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(180deg);
  cursor: pointer;
`;

const Next = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

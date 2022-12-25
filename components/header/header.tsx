import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import LogoImage from '../../assets/svg/logo.svg';

export const Header = () => {
  return (
    <HeaderRoot>
      <Link href='/'>
        <Image src={LogoImage} alt='nebula' />
      </Link>
    </HeaderRoot>
  );
};

const HeaderRoot = styled.div`
  width: 100%;
  padding: 30px 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 480px) {
    padding: 20px 0;

    img {
      width: 98px;
      height: 14px;
    }
  }
`;

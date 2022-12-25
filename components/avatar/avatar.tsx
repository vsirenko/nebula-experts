import Image from 'next/image';
import styled from 'styled-components';

import { Chip } from '../chip';

type AvatarProps = {
  src: string;
  status: string;
};

export const Avatar = ({ src, status }: AvatarProps) => {
  return (
    <AvatarRoot>
      <Image src={src} alt='avatar img' width={100} height={100} />
      <Status>
        <Chip variant='positive' size='small'>
          {status}
        </Chip>
      </Status>
    </AvatarRoot>
  );
};

const AvatarRoot = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  user-select: none;

  img {
    border-radius: 50%;
  }

  @media (max-width: 480px) {
    img {
      width: 82px;
      height: 82px;
      aspect-ratio: auto 82 / 82;
      border-radius: 12px;
    }
  }
`;

const Status = styled.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 480px) {
    width: 100%;
    bottom: -29px;
    div {
      width: 100%;
    }
  }
`;

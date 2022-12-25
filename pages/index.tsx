import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { API, MockData } from '../api/api';
import { Card } from '../components/card';
import { MainLayout } from '../components/layouts/';
import { Pagination } from '../components/pagination';
import { Text } from '../components/text';

type HomeProps = {
  data: MockData;
  currentPage: number;
};

export default function Home({ data, currentPage }: HomeProps) {
  const { items, total } = data;
  const router = useRouter();

  const onPageChange = (pageNumber: number) => {
    router.replace(`?page=${pageNumber}&offset=${pageNumber * 4 - 4}`);
  };

  const onPrevPage = () => {
    router.replace(`?page=${currentPage - 1}&offset=${currentPage * 4 - 8}`);
  };

  const onNextPage = () => {
    router.replace(`?page=${currentPage + 1}&offset=${currentPage * 4}`);
  };

  return (
    <>
      <Head>
        <title>Nebula advisors | {total} advisors available</title>
        <meta name='description' content='Nebula Experts' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <MainLayout>
        <Container>
          <Title>
            <Text variant='h2' color='light-grey'>
              Find your advisor
            </Text>
            <Text size='medium' color='light-grey'>
              {total} advisors available
            </Text>
          </Title>

          <Ul>
            {items.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  slogan={item.slogan}
                  status={item.status}
                  experience={item.experience}
                  total_orders={item.total_orders}
                  specializations={item.specializations}
                />
              );
            })}
          </Ul>

          <Pagination
            perPage={4}
            currentPage={currentPage}
            total={total}
            onPageChange={onPageChange}
            onPrevPage={onPrevPage}
            onNextPage={onNextPage}
          />
        </Container>
      </MainLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let offset = 0;
  let page = 1;

  if (context.query.page) {
    offset = parseInt(context.query.offset as string);
    page = parseInt(context.query.page as string);
  }

  const data = await API.getExperts(offset);

  return {
    props: { currentPage: page, data },
  };
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 150px;

  @media (max-width: 480px) {
    padding: 0px 15px 15px 15px;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
  @media (max-width: 480px) {
    margin-bottom: 32px;

    h2 {
      font-size: 22px;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

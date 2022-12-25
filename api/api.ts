import { Expert } from '../types/experts';
import { sleep } from '../utils/sleep';
import mock from './mock-data.json';

const LIMIT = 4;

export type MockData = { items: Expert[]; total: number };

class ExpertsAPI {
  getExperts = async (offset: number): Promise<MockData> => {
    await sleep();

    return {
      items: mock.data.slice(offset, offset + LIMIT),
      total: mock.data.length,
    };
  };

  getExpertById = async (id: string) => {
    await sleep();
    const result = mock.data.find((item) => item.id === id);
    return result;
  };
}

export const API = new ExpertsAPI();

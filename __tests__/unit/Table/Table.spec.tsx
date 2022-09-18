import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from '../../../components/Table';
import { mockedList, mockedCategories } from '../../mocks/Table/mockedList';
import React from 'react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const useRouterMock = useRouter as jest.MockedFunction<any>;

it('should show a message saying no results where found when list is empty', async () => {
  useRouterMock.mockReturnValue({
    query: { termType: 'name', sort: 'asc', sortType: 'name' },
    isReady: true,
    push: jest.fn()
  });

  render(<Table categories={{}} list={[]} customClass="" />);

  expect(screen.getByRole('heading')).toHaveTextContent('No matching results found.');
});

it('should render table with given categories and list', async () => {
  useRouterMock.mockReturnValue({
    query: { termType: 'name', sort: 'asc', sortType: 'name' },
    isReady: true,
    push: jest.fn()
  });

  const { container } = render(
    <Table categories={mockedCategories} list={mockedList} customClass="" />
  );

  expect(screen.findAllByRole('thead')).toBeInTheDocument;
  expect(screen.findAllByRole('tbody')).toBeInTheDocument;
  expect(container.getElementsByClassName('tableHeadValue')).toBeInTheDocument;
});

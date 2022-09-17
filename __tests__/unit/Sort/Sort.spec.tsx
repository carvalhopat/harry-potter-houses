import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sort from '../../../components/Table/Sort';
import React from 'react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const useRouterMock = useRouter as jest.MockedFunction<any>;

it('should have ascending sort button selected by matching route', async () => {
useRouterMock.mockReturnValue({
    query: { termType: 'name', sort: 'asc', sortType: 'position_applied' },
    push: jest.fn(),
  });

  render(<Sort sortType="position_applied" />);

  const ascSortButton = screen.getByTestId('sort-asc');
  const descSortButton = screen.getByTestId('sort-desc');

  expect(ascSortButton.classList.contains('selected')).toBe(true);
  expect(descSortButton.classList.contains('selected')).toBe(false);
  expect(descSortButton).toMatchSnapshot();
});

it('should have descending sort button selected by matching route', async () => {
    useRouterMock.mockReturnValue({
      query: { termType: 'name', sort: 'desc', sortType: 'position_applied' },
      push: jest.fn()
    });
  
    render(<Sort sortType="position_applied" />);

    const ascSortButton = screen.getByTestId('sort-asc');
    const descSortButton = screen.getByTestId('sort-desc');
  
    expect(ascSortButton.classList.contains('selected')).toBe(false);
    expect(descSortButton.classList.contains('selected')).toBe(true);
    expect(descSortButton).toMatchSnapshot();
});

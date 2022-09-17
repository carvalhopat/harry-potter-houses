import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from '../../../components/Table/Badge';
import React from 'react';

const badgeStatusList = ['rejected', 'waiting', 'approved']

badgeStatusList.map(badgeStatus => {
    return it(`should render the ${badgeStatus} option in Badge component`, async () => {
        render(<Badge status={badgeStatus} />);
      
        const badge = screen.getByTestId('badge');
      
        expect(badge).toHaveTextContent(badgeStatus);
        expect(badge.classList.contains(badgeStatus)).toBe(true)
        expect(badge).toMatchSnapshot();
      });
})
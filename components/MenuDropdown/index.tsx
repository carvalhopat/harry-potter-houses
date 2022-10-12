import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import styles from './MenuDropdown.module.scss';
import useMenuDropdown from './useMenuDropdown';

function MenuDropdown({ selectedOption, children, customClass }) {
  const { ref, onMenuOpen, showMenu } = useMenuDropdown();

  return (
    <>
      <div ref={ref} className={customClass} onClick={onMenuOpen}>
        {selectedOption}
        <Image src="/arrow-down.svg" width="10" height="10" alt="Open menu" />
      </div>
      <div className={cx(styles.menuOptions, { [styles.showMenu]: showMenu })}>{children}</div>
    </>
  );
}

export default MenuDropdown;

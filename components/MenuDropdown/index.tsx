import React from 'react';
import Image from 'next/image';
import cx from 'classnames';
import styles from './MenuDropdown.module.scss';
import useMenuDropdown from './useMenuDropdown';

function MenuDropdown({ selectedOption, children, customClass }) {
  const { ref, onMenuOpen, showMenu, showComponent } = useMenuDropdown();

  function Icon() {
    return (
      <svg width="8" height="5" viewBox="0 0 12 6" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 6L0 0H12L6 6Z" fill="#AAAAAA" />
      </svg>
    );
  }

  return (
    <>
      {showComponent && (
        <>
          <div ref={ref} className={cx(styles.button, customClass)} onClick={onMenuOpen}>
            {selectedOption}
            <Icon />
          </div>
          <div className={cx(styles.menuOptions, { [styles.showMenu]: showMenu })}>{children}</div>
        </>
      )}
    </>
  );
}

export default MenuDropdown;

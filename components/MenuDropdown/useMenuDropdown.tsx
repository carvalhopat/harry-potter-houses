import { useState, useRef, useEffect } from 'react';

function useMenuDropdown() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);

  return { ref, onMenuOpen: () => setShowMenu(!showMenu), showMenu };
}

export default useMenuDropdown;

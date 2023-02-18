import useMasterTheme from 'core/hooks/useMasterTheme';
import Container from '../Container/Container';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { ReactElement, useEffect, useState } from 'react';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import HeaderNav from './HeaderNav/HeaderNav';

const HeaderLayout = () => {
  //hooks
  const { isDark, changeTheme, theme } = useMasterTheme();

  // state
  const [themeContent, setThemeContent] = useState<ReactElement>(<BsFillMoonStarsFill size={20} />);

  useEffect(() => setThemeContent(isDark ? <BsFillSunFill color='var(--z-orange)' size={20} /> : <BsFillMoonStarsFill size={20} />), [theme]);

  return (
    <>
      <header className='bg-z-header-footer-bg header w-full top-0 shadow-sm sticky z-[9999]'>
        <Container className='flex flex-col'>
          <nav className='flex justify-between items-center h-20'>
            <HeaderNav />

            <HeaderButtons changeTheme={changeTheme} themeContent={themeContent} />
          </nav>
        </Container>
      </header>
      
    </>
  );
};

export default HeaderLayout;

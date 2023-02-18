import React, { FC } from 'react';

interface IHeaderButtons {
  changeTheme: any;
  themeContent: any;
}

const HeaderButtons: FC<IHeaderButtons> = ({ changeTheme, themeContent }) => {
  return (
    <div className='flex items-center gap-1'>
      <span onClick={changeTheme} className='cursor-pointer p-3 hover:bg-z-gray-light rounded-full'>
        {themeContent}
      </span>
    </div>
  );
};

export default HeaderButtons;

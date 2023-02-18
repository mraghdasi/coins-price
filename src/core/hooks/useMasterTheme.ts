import { RootState } from 'core/store';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'next-themes';
import { setSettingSwitchTheme } from 'core/store/slice/setting/settingThemeSlice';

const useMasterTheme = () => {
  const { theme } = useSelector((store: RootState) => store.settingThemeStore);
  const dispatch = useDispatch();
  const { setTheme } = useTheme();

  const changeTheme = () => {
    dispatch(setSettingSwitchTheme());
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return { changeTheme, theme, isDark: theme === 'dark' };
};

export default useMasterTheme;

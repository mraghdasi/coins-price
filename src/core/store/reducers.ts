import { combineReducers } from 'redux';

import settingThemeStore from './slice/setting/settingThemeSlice';

const rootReducer = combineReducers({ settingThemeStore });

export default rootReducer;

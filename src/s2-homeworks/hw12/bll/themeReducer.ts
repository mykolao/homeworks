import { AppStoreType } from '../../hw10/bll/store';

const initState = {
  themeId: 1,
};

type ThemeState = typeof initState;

export const themeReducer = (
  state = initState,
  action: Action,
): typeof initState => {
  switch (action.type) {
    case 'SET_THEME_ID':
      return { themeId: action.id };

    default:
      return state;
  }
};

export const changeThemeId = (
  id: number,
): { type: 'SET_THEME_ID'; id: number } => ({
  type: 'SET_THEME_ID',
  id,
});

type Action = ReturnType<typeof changeThemeId>;

export const selectThemeId = (state: AppStoreType) => state.theme.themeId;

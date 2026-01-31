import { UserType } from '../HW8';

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number };

const collator = new Intl.Collator('ru', {
  sensitivity: 'base',
  caseFirst: 'false',
});

export const homeWorkReducer = (state: UserType[], action: ActionType): any => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      // by name
      const order = action.payload;
      const sorted = [
        ...state.sort((a, b) => {
          return collator.compare(a.name, b.name);
        }),
      ];

      return order === 'up' ? sorted : sorted.reverse();
    }
    case 'check': {
      const age = action.payload;
      const filtered = state.filter((user) => user.age >= age);
      return filtered;
    }
    default:
      return state;
  }
};

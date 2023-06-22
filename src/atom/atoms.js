import { atom } from 'recoil';
const isDarkAtom = atom({
  key: 'isDark',
  default: true,
});
const listPageReLoading = atom({
  key: 'listPageReLoading',
  default: false,
});
const focusNav = atom({
  key: 'focusNav', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
export { listPageReLoading, focusNav, isDarkAtom };

import { isDarkTheme } from './isDarkTheme';

/**
 * Toggles the current theme.
 *
 * @note
 * This function only works when `window` exists.
 *
 * @returns
 */
export function toggleTheme(): void {
  if (typeof window === 'undefined') {
    return;
  }

  const document = window.document;
  if (isDarkTheme()) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
}
import { useCallback, useEffect } from 'react';
import { useLocalStorage } from '@/src/generic/hooks/useLocalStorage.ts';
import { ModeContext } from '@/src/generic/mode/Mode.context.ts';
import { Children } from '@/src/generic/types/Children.type.ts';
import { Mode } from '@/src/generic/mode/Mode.type.ts';

export function ModeProvider({ children }: { children: Children }) {
  const [mode, setMode] = useLocalStorage<Mode>('app_mode', 'system');

  const updateMode = useCallback(
    (newMode: Mode) => {
      if (newMode === 'dark' || newMode === 'system') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      setMode(newMode);
    },
    [setMode]
  );

  useEffect(() => {
    if (mode === 'system') {
      updateMode(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    } else {
      updateMode(mode);
    }

    const changeMode = (event: { matches: boolean }) => {
      updateMode(event.matches ? 'dark' : 'light');
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', changeMode);

    return () =>
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', changeMode);
  }, []);

  const handleModeChange = useCallback(
    (newMode: Mode) => {
      updateMode(newMode);
    },
    [updateMode]
  );

  return <ModeContext.Provider value={[mode, handleModeChange]}>{children}</ModeContext.Provider>;
}

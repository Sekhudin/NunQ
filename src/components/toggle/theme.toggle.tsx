'use client';
import React from 'react';
import { SunIcon, MoonStarIcon } from 'lucide-react';
import { RoundedIconMD } from 'components/hoc/icon.hoc';
import { Button } from 'packages/ui/button';
import { cn, Props, WithHooks } from 'packages/utils/cn';

const LightIcon = RoundedIconMD(SunIcon);
const DarkIcon = RoundedIconMD(MoonStarIcon);
const ThemeToggle = ({ className, hooks, ...props }: Props<WithHooks<'useTheme'>>) => {
  const { setTheme, theme } = hooks.useTheme();

  const onClickHandler = () => {
    if (!theme) return;
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
    return;
  };

  return (
    <Button
      className={cn(`rounded-full`, className)}
      variant="outline-icon"
      size="icon-sm"
      aria-label="toggle dark-theme"
      onClick={onClickHandler}>
      <LightIcon className="dark:hidden" />
      <DarkIcon className="hidden dark:block" />
    </Button>
  );
};

export default ThemeToggle;

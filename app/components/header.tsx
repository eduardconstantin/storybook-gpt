'use client'
import DarkModeSwitch from '@storybook-gpt/app/components/DarkModeSwitch'
import React from 'react'
import GitHubButton from 'react-github-btn'

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row w-full justify-between items-center m-4">
      <div>
        <p className="font-bold text-3xl leading-7 text-dark dark:text-light">
          STORYBOOK GPT
        </p>
        <p className="text-base text-left text-[#FF4785]">
          Generate Storybook stories from React components
        </p>
      </div>
      <div className="flex items-center gap-5 ">
        <GitHubButton
          href="https://github.com/eduardconstantin/storybook-gpt"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star Storybook GPT on GitHub"
        >
          Star
        </GitHubButton>
        <DarkModeSwitch />
      </div>
    </header>
  )
}
export default Header

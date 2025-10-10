'use client'
import DarkModeSwitch from '@storybook-gpt/app/components/DarkModeSwitch'
import React from 'react'
import GitHubButton from 'react-github-btn'

const Header = () => {
  return (
    <header className="flex w-full flex-col items-center gap-6 mb-8 md:flex-row md:justify-between md:mb-12">
      <div className="text-center md:text-left">
        <p className="font-bold text-3xl leading-7 text-dark dark:text-light">
          STORYBOOK GPT
        </p>
        <p className="text-base text-[#FF4785]">
          Generate Storybook stories from React components
        </p>
      </div>
      <div className="flex flex-col items-center gap-3 md:items-end">
        <div className="flex items-center gap-5">
          <DarkModeSwitch />
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
        </div>
        <div className="flex items-center justify-center gap-3">
          <a href="mailto:ibinceanu.eduard@yahoo.com" target="_blank">
            <img
              src="https://img.icons8.com/fluent/32/000000/email-open.png"
              alt="Email"
              className="h-6 w-6"
            />
          </a>
          <a href="https://eduardconstantin.github.io" target="_blank">
            <img
              src="https://img.icons8.com/fluent/32/000000/github.png"
              alt="GitHub"
              className="h-6 w-6"
            />
          </a>
          <a href="https://x.com/_Eduard26" target="_blank">
            <img
              src="https://img.icons8.com/fluent/32/000000/twitter.png"
              alt="Twitter"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header
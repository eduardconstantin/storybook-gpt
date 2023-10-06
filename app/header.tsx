'use client'
import React from 'react'
import GitHubButton from 'react-github-btn'

const Header = () => {
  return (
    <header className="flex flex-row w-full justify-between items-center mb-3">
      <div>
        <p className="font-bold text-3xl leading-7">STORYBOOK GPT</p>
        <p className="text-base text-zinc-400">
          Generate Storybook stories from React components
        </p>
      </div>
      <div>
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
    </header>
  )
}
export default Header

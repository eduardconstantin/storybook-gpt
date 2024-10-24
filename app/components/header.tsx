'use client'
import DarkModeSwitch from '@storybook-gpt/app/components/DarkModeSwitch'
import React from 'react'
import GitHubButton from 'react-github-btn'

const Header = () => {
  return (
    <header className="flex flex-row w-full justify-between items-center m-4">
      <div>
        <p className="font-bold text-3xl leading-7 text-dark dark:text-light">
          STORYBOOK GPT
        </p>
        <p className="text-base text-zinc-400">
          Generate Storybook stories from React components
        </p>
      </div>
      <div className="flex items-center gap-5 ">
      <div class="social-links">
          <!-- Email -->
          <a href="ibinceanu.eduard@yahoo.com" target="_blank">
          <img src="https://img.icons8.com/fluent/48/000000/email-open.png" alt="Email">
          </a>
    
          <!-- GitHub -->
          <a href="eduardconstantin.github.io" target="_blank">
              <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub">
          </a>
          
          <!-- Twitter -->
          <a href="https://x.com/_Eduard26" target="_blank">
              <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter">
          </a>
    
 
        </div>
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
    </header>
  )
}
export default Header

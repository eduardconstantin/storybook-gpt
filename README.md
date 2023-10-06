<h1 align="center">Storybook GPT</h1>
<br />

Storybook GPT is a web application that can be used to convert React components into Storybook stories. It is using OpenAI API to convert the components and it is built with NextJS 13, the React framework for the web that supports server components, streaming, and layouts. It also uses TypeScript for type safety and TailwindCSS for styling. With Storybook GPT, you can easily create and share interactive UI components for your projects.

<br />
<img src="app-preview.gif"/>

<div align="center">
<br />

[![Project license](https://img.shields.io/github/license/eduardconstantin/storybook-gpt?style=flat-square)](LICENSE)
[![Contributors](https://img.shields.io/github/contributors/eduardconstantin/storybook-gpt?style=flat-square)](https://github.com/eduardconstantin/storybook-gpt/graphs/contributors)
[![Issue](https://img.shields.io/github/issues/eduardconstantin/storybook-gpt?style=flat-square)](https://github.com/eduardconstantin/storybook-gpt/issues)
[![PRs](https://img.shields.io/github/issues-pr/eduardconstantin/storybook-gpt?style=flat-square)](https://github.com/eduardconstantin/storybook-gpt/pulls)
[![Stars](https://img.shields.io/github/stars/eduardconstantin/storybook-gpt?style=flat-square)](https://github.com/eduardconstantin/storybook-gpt/stargazers)

</div>

## 🌟 Features

-   Dark mode
-   Copy to clipboard

## 🌱 Getting Started

Clone the repository:

```bash
git clone https://github.com/eduardconstantin/storybook-gpt.git
```

Install dependencies:

```bash
npm install
```

Input your OPENAI API key in the .env file, you can get your API key [here](https://platform.openai.com/account/api-keys):

```bash
OPENAI_API_KEY=$YOUR_API_KEY
```

Run the app:

```bash
npm run dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

Add your react component to the input field and hit generate story, in a few seconds you will have a storybook story generated.

## 👥 Contributing

I welcome feedback and contributions from other developers, which can help improve the quality of the code and the application overall.

In order to create an issue or a pull request with your changes, please read [our contribution guidelines](CONTRIBUTING.md), and thank you for being involved!

For a full list of all authors and contributors, see
[the contributors page](https://github.com/eduardconstantin/storybook-gpt/contributors).

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

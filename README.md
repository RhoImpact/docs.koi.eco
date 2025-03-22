<p align="center">
  <img alt="koi-by-rho-logo" src="./src/images/logos-internal/github-banner-koi-by-rho.webp">
</p>

# Koi Docs (docs.koi.eco)

<p align="center">
  <a href='http://makeapullrequest.com'><img alt='PRs Welcome' src='https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=shields'/></a>
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/RhoImpact/docs.koi.eco"/>
  <a href='https://product.koi.eco'><img alt="Join Community" src="https://img.shields.io/badge/community-join-blue"/></a>
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/RhoImpact/docs.koi.eco"/>
  <a href='https://app.netlify.com/sites/koi-docs/deploys'><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/23094999-3b88-4a3f-8040-ec49d6ba1069/deploy-status"/></a>
</p>

---

<p align="center">
  <a href="https://product.koi.eco">Feedback</a> - <a href="https://product.koi.eco/roadmap">Roadmap</a> - <a href="https://github.com/RhoImpact/docs.koi.eco/issues/new">Open an issue</a> - <a href="https://github.com/RhoImpact/docs.koi.eco/blob/main/STYLEGUIDE.md">Style guide</a>
</p>

[Koi](https://app.koi.eco?utm_source=docs-readme) represents a paradigm shift in *assessing the potential impact of solutions*, with an
emphasis on **transparency** and **speed**.

Compared to traditional climate tools, Koi is intuitive, forward-looking, and the first
impact forecasting platform that blends the **latest generative AI with decades of hands-on forecasting experience**.
We exist to help **scale the best climate solutions, faster**.

## How to Contribute to the Docs

First, thank you for your interest in contributing to the Koi Documentation!

### Fastest Route

The fastest way to provide feedback is to visit our [Feedback Board](https://product.koi.eco?utm_source=docs-readme).
You can use your existing Koi account to log in and submit feedback, feature requests, and bug reports.

### Longer Route

If you'd like to submit feedback via a pull request directly in GitHub, you can do so by following these steps:

1. Navigate to the [docs.koi.eco](https://github.com/RhoImpact/docs.koi.eco) repository.
2. Click the `Fork` button to create your own copy of the repository.
3. You can use the GitHub UI to then modify files in your forked repository.
4. Once you're ready to submit your changes, navigate to your forked repository and click the `Create Pull Request` button.
5. Fill out the PR template and submit your request.

## Developer Route
If you plan on contributing to the docs in more of a programmatic fashion, here are some additional details.

1. Clone the repository

```bash
git clone https://github.com/RhoImpact/docs.koi.eco.git
```

2. Install the dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Additional Notes

Koi Docs are built on top of
a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## Global search

This template includes a global search that's powered by the [FlexSearch](https://github.com/nextapps-de/flexsearch) library. It's available by clicking the search input or by using the `⌘K` shortcut.

This feature requires no configuration, and works out of the box by automatically scanning your documentation pages to build its index. You can adjust the search parameters by editing the `/src/mdx/search.mjs` file.

## Mermaid

We often use [Mermaid](https://mermaid-js.github.io/) to render diagrams in the docs.

To add a diagram to a page, you can use the following syntax:

```mdx
import Mermaid from '@/components/Mermaid'

export const networkDiagram = `graph LR
Start[Start] --> DecisionA{Decision A}
DecisionA --> Outcome1[Outcome 1]
DecisionA --> Outcome2([Outcome 2])
`

<Mermaid chart={networkDiagram} />
```

## License

This site is built using a commercially licensed template under the Tailwind UI License. All original code in this repository is licensed under the MIT License. However, Tailwind UI components remain under their original license, and you must purchase a Tailwind UI license if you intend to use them. Please respect that!

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind UI](https://tailwindui.com) - the official Tailwind UI documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [Framer Motion](https://www.framer.com/docs/) - the official Framer Motion documentation
- [MDX](https://mdxjs.com/) - the official MDX documentation
- [Algolia Autocomplete](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/what-is-autocomplete/) - the official Algolia Autocomplete documentation
- [FlexSearch](https://github.com/nextapps-de/flexsearch) - the official FlexSearch documentation
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - the official Zustand documentation
- [Koi](https://app.koi.eco?utm_source=docs-readme) - the official Koi

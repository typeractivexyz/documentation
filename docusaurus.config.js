// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Typeractive.xyz Documentation",
  tagline: "Documentation for Typeractive.xyz Products",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.typeractive.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/typeractivexyz/documentation/tree/main",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/typeractive-social.png",
      navbar: {
        title: "typeractive",
        logo: {
          alt: "Typeractive.xyz Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://typeractive.xyz",
            "aria-label": "Shop",
            className: "header-shop-link tooltip-header",
            position: "right",
            "data-tooltip": "Shop",
          },
          {
            href: "https://typeractive.xyz/discord",
            "aria-label": "Discord",
            className: "header-discord-link tooltip-header",
            position: "right",
            "data-tooltip": "Discord",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "VFSNSU0UZJ",

        // Public API key: it is safe to commit it
        apiKey: "bcd7ec372615a69eb6a0316ba414e1dd",

        indexName: "docs.typeractive.xyz",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

module.exports = config;

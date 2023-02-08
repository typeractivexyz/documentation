// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
          path: "products",
          routeBasePath: "products",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/typeractivexyz/documentation/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "build-guides",
        path: "build-guides",
        routeBasePath: "build-guides",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/typeractivexyz/documentation/tree/main",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "troubleshooting",
        path: "troubleshooting",
        routeBasePath: "troubleshooting",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/typeractivexyz/documentation/tree/main",
      },
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
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Products",
          },
          {
            to: "build-guides",
            position: "left",
            label: "Build Guides",
            activeBaseRegex: `/build-guides/`,
          },
          {
            to: "troubleshooting",
            position: "left",
            label: "Troubleshooting",
            activeBaseRegex: `/troubleshooting/`,
          },
          {
            href: "https://typeractive.xyz",
            'aria-label': "Shop",
            className: 'header-shop-link',
            position: "right",
          },
          {
            href: "https://typeractive.xyz/discord",
            'aria-label': "Discord",
            className: 'header-discord-link',
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/typeractivexyz/documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nice Technologies LLC. Built with Docusaurus.`,
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
    }),
};

module.exports = config;

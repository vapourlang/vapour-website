// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Vapour",
  tagline: "Typed superset of R",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://vapour.run",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vapourlang", // Usually your GitHub org/user name.
  projectName: "vapour", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    ({
      announcementBar: {
        id: 'alpha',
        content:
          'Vapour is currently in <strong>very early alpha</strong>!',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: "img/vapour-social.png",
      navbar: {
        title: "Vapour",
        logo: {
          alt: "Vapour Logo",
          src: "img/vapour-sm.png",
        },
        items: [
          { to: "/install", label: "Install", position: "left" },
          { to: "/cli", label: "CLI", position: "left" },
          { to: "/lsp", label: "LSP", position: "left" },
          { to: "/repl", label: "REPL", position: "left" },
          {
            type: "doc",
            docId : "introduction",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/vapourlang/vapour",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Get Started",
                to: "/get-started",
              },
              {
                label: "Docs",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/vapour",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/jdatap",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/vapourlang",
              },
            ],
          },
        ],
        copyright: `Vapour ${new Date().getFullYear()}.`,
      },
      prism: {
        additionalLanguages: ["r", "vapour", "json"],
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [require.resolve("docusaurus-lunr-search")],
};

export default config;

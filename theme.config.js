import React from 'react'

const config = {
  logo: <img src='/omnilane-logo.png' width="150px"/>,
  project: {
    link: 'https://github.com/omnilane-labs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/omnilane-labs/omnilane-docs',
  footer: {
    text: 'Omnilane Docs',
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: "Omnilane Docs - %s",
      descriptionTemplate: "%s"
    };
  },
}

export default config

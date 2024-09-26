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
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Omnilane Docs - Cross-Chain Swap Infrastructure" />
      <meta property='og:image' content='https://omnilane.com/omnilane-bg.png' />
    </>
  ),
  useNextSeoProps: () => {
    return {
      titleTemplate: "Omnilane Docs - %s",
      descriptionTemplate: "%s",
      
    };
  },
}

export default config

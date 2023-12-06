## 🚧 under construction 🚧

### about

This is a NextJS 14 project with TypeScript. It gets content from a headless CMS (Strapi) and renders components that correspond to the content "block" type. Currentlu deployed on Vercel.

#### 📝 component and style structure

This is very much a work in progress. The current structure will get cleaned up as the project progresses.


## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

### Generating Types fromthe Strapi GraphQL API

Download the schema from the Strapi GraphQL API. Locally, the GraphQL API is available at `http://localhost:1337/graphql` and clicking "Schema" on the right, then clicking "Download". Choose the SDL option.

Replace the local `app/schemas/schema.graphql` file with the downloaded file.

Next run the generation command:

```bash
npm run codegen
```

## Next Docs and Refereces

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

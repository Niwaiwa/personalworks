# Personal Works

Personal works for learning and practicing.

## Getting Started (local)

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Started (docker)

```bash
docker-compose up -d --build
```

Open [http://localhost:9001](http://localhost:9001) with your browser to see the result.

## install

next.js and material-ui

```bash
yarn create next-app --typescript project_name
yarn add @mui/material @emotion/react @emotion/styled @emotion/server
```

Put external CSS in pages/_document.tsx

```tsx
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
```

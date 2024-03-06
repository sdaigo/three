# Monorepo with Turborepo starter

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `packages/const`: a constants shared by apps
- `packages/foundation`: a design tokens defined by [panda](https://panda-css.com/)
- `packages/ui`: a stub React component library shared by apps
- `packages/libs`: a common library layer for apps and packages
- `packages/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `apps/web-1`: [Next.js](https://nextjs.org/) app
- `apps/web-2`: another [Next.js](https://nextjs.org/) app

## Get started

Install all deps at project root:

```bash
bun install
```

To develop all apps and packages, run the following command at project root:

```bash
bun dev
```

it starts:

- apps in `apps` directory in dev mode
- Storybook in `packages/ui`
- 

### Build

To build all apps and packages, run the following command:

```bash
bun run build
```

### Develop

To develop all apps and packages, run the following command:

```bash
bun dev
```

### Add package

```bash
bun turbo gen workspace --name {package-name}
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```bash
npx turbo link
```
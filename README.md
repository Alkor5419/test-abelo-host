## Какие сложности, если они были, возникли при выполнении тестового задания?

Была проблемка с редиректом, забыл, что он работает только с сервернымы компонентами.В клиентской использовал useRouter().Проблемы с картинками invalid src , нужно было добавить домен в некст конфиг

## Как вы оцениваете полноту и качество своей реализации?

Полностью качественно выполнил работу в рамках тех. задания

## Если бы это был production-проект и у вас было больше времени, какие изменения или доработки вы бы внесли?

Не хранил бы в local storage токен.
Настройка Git хуков с Husky и lint-staged. Это позволит автоматически форматировать и проверять код перед каждым коммитом. Добавил бы Sentry на проект. Можно внедрить скелетон прелоадеры.Секретные данные лучше хранить в .env(например логин и пароль из данного задания). Добавить пагинацию, фильтрацию. Добавление в корзину.Еще можно добавить анимацию на карточки.

## Уточните пожалуйста, использовали ли вы ИИ при выполнении и если использовали, то для чего конкретно. Это важно для корректной оценки.

Да использовал, для быстрой настройки prettier, stylelint, eslint, в zustand немного использовал, создал миксины и цветовую палитру, при дебаггинге.Настройка докера

## Docker

# Сборка и запуск контейнера для разработки

docker-compose -f docker-compose.dev.yml up

# Если нужно пересобрать образ (например, после изменений в зависимостях)

docker-compose -f docker-compose.dev.yml up --build

# Запуск в фоновом режиме

docker-compose -f docker-compose.dev.yml up -d

# Останавливаете контейнер разработки

docker-compose -f docker-compose.dev.yml down

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

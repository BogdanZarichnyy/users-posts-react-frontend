# Використовуємо образ лінукс Alpine з версією node 22.17.0
FROM node:22.17.0 as build

# Вказуємо нашу робочу директорію
WORKDIR /usr/src/app

# Скопіювати package.json і package-lock.json в середину контейнера
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо решту файлів додатку в контейнер
COPY . .

# Збираємо фронт
RUN npm run build

# Не обов'язково запускати проект на nginx, ми тут просто перевіряємо роботу докера,
# сам nginx використовують для бекенду а не для фронта, 
# але це нам спростить доступ до фронтенду коли ми його збілдимо
FROM nginx:stable-alpine

COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
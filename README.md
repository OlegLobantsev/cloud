# Cloud (Облако) - хранилище файлов с возможностью загрузки, скачивания (как на прямую, так и по ссылке), добавления и изменения комментария к файлу, переименования файла и его удаления.

### Проект развернут на [reg.ru](https://185.46.8.72/) с помощью - [nginx](https://nginx.org/) и [gunicorn](https://gunicorn.org/),
* Заверен **Self-signed certificate**, при переходе по ссылке выйдет предупреждение *


### Для локального развертывания проекта необходимо:


- Клонировать репозиторий
```
git clone https://github.com/OlegLobantsev/cloud.git
```
- Перейти в рабочий каталог
```
cd cloud
```
- Создать и активировать виртуальное окружение
```
python3 -m venv env

source env/bin/activate
```
- Установить зависимости
```
pip install -r requirements.txt
```
- Создать базу данных
```
psql -U postgres

CREATE DATABASE cloud;
```
- Создать файл настроек (шаблон .env.template) находится в корне 
```
nano .env
```
- Произвести миграции
```
python3 manage.py migrate
```
- Создать пользователя с правами Администратора ресурcа
```
python3 manage.py createsuperuser
```
- Перейти в каталог Фронтэнда
```
cd frontend
```
- Установить зависимости для NPM
```
npm install
```
- При необходимости скорректировать адрес локального сервера *BASE_URL* в `frontend/src/api/requests.js`

- Собрать проект
```
npm run dev
```
- Перейти в корневой каталог и запустить сервер
```
cd ../
python3 manage.py runserver
```

### Взаимодействие с приложением:


- Для регистрации в приложении вы можете воспользоваться ссылкой *Регистрация* или нажать на  *Зарегистрируйтесь, чтобы продолжить.*
- Все поля обязательны для заполнения, имеется контроль сложности пароля, одноименные логины не допускаются
- После регистрации вы можете зайти в приложение введя данные в появившуюся форму или воспользовавшись ссылкой *Вход*


- Для ***стандартного*** пользователя доступен функционал:
    - Загрузка файла с устройства (Кнопка в правом нижнем углу *Загрузить файл*(Нажимаем, выбираем файл, нажимаем *Подтвердить*))
    - Переименование выбранного файла
    - Добавление комментария для выбранного файла
    - Скачивание выбранного файла
    - Получение ссылки для скачивания выбранного файла (можно сразу скопировать в буфер нажав на кнопку)
    - Удаление выбранного файла


- Для ***администратора*** доступен функционал(помимо вышеизложенного):
    - Доступ в панель управления (ссылка в верхней части экрана появляется при наличии прав администратора)
    - Просмотр информации о зарегистрированных пользователях
    - Изменение прав пользователей
    - Просмотр и взаимодействие с файлами пользователя
    - Удаление пользователя



## Проект написан на [Python](https://www.python.org/) с применением [Django](https://github.com/django/django), [Node.js](https://nodejs.org/), [React](https://reactjs.org/)


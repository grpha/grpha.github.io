import { v4 as uuid } from "uuid"; // Импортирование функции uuid для генерации уникальных идентификаторов

let users = []; // Создание массива пользователей

export const getUsers = (req, res) => { // Экспорт функции getUsers для получения списка всех пользователей
    res.send(users); // Отправка ответа с массивом пользователей
};

export const createUser = (req, res) => { // Экспорт функции createUser для добавления нового пользователя
    const user = req.body; // Сохранение объекта пользователя из тела запроса
    
    users.push({ ...user, id: uuid() }); // Добавление нового пользователя в массив с новым уникальным идентификатором, используя функцию uuid()
    res.send("User Added Successfully"); // Отправка ответа об успешном добавлении пользователя
};

export const getUser = (req, res) => { // Экспорт функции getUser для получения одного пользователя по его идентификатору
    const singleUser = users.filter((user) => user.id === req.params.id); // Поиск пользователя по идентификатору из параметров запроса
    res.send(singleUser); // Отправка ответа с найденным пользователем
};

export const deleteUser = (req, res) => { // Экспорт функции deleteUser для удаления пользователя по его идентификатору
    users = users.filter((user) => user.id !== req.params.id); // Фильтрация массива пользователей, оставляя только тех, у кого идентификатор НЕ равен запрошенному
    res.send("User Deleted"); // Отправка ответа об успешном удалении пользователя
};

export const updateUser = (req, res) => { // Экспорт функции updateUser для обновления данных пользователя
    const user = users.find((user) => user.id === req.params.id); // Поиск пользователя по идентификатору из параметров запроса
    
    user.name = req.body.name; // Обновление поля "name" пользователя
    user.email = req.body.email; // Обновление поля "email" пользователя
    user.contact = req.body.contact; // Обновление поля "contact" пользователя

    res.send("User Updated"); // Отправка ответа об успешном обновлении пользователя
};

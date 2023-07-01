import express from "express"; // Импортирование Express.js из установленного модуля
import bodyParser from "body-parser"; // Импортирование body-parser для обработки тела запроса
import cors from "cors"; // Импортирование CORS для обеспечения безопасности при обмене данными между клиентом и сервером

import userRoutes from "./routes/users.js"; // Импортирование маршрутов (routes) для пользователей из файла "./routes/users.js"

const app = express(); // Создание экземпляра Express.js
const port = 5000; // Установка порта сервера

app.use(bodyParser.json()); // Использование body-parser для парсинга JSON-файлов
app.use(cors()); // Использование Cors для обработки CORS-запросов

app.use("/", userRoutes); // Установка всех маршрутов для пользователей из файла "./routes/users.js"

app.get("/", (req, res) => res.send("Hello from Express")); // Обработчик маршрута GET "/", который отправляет приветственное сообщение
app.all("*", (req, res) => res.send("That route is not exist")); // Обработчик маршрута любого типа с шаблонным путем "*", который отправляет сообщение о том, что запрошенный маршрут не существует

app.listen(port, () =>
console.log(`Server is listening on port: http://localhost:${port}`)
); // Сервер начинает прослушивание порта, на который он был установлен
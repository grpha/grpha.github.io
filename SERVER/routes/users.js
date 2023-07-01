import express from "express"; // Импортирование Express.js

// Импорт экспортированных функций из файла "../controllers/users.js"
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router(); // Создание экземпляра Router из Express.js

router.get("/users", getUsers); // Установка маршрута GET "/users" и обработчика getUsers
router.post("/user", createUser); // Установка маршрута POST "/user" и обработчика createUser
router.get("/user/:id", getUser); // Установка маршрута GET "/user/:id" и обработчика getUser
router.delete("/user/:id", deleteUser); // Установка маршрута DELETE "/user/:id" и обработчика deleteUser
router.put("/user/:id", updateUser); // Установка маршрута PUT "/user/:id" и обработчика updateUser

export default router; // Экспортирование объекта Router для использования в других файлах.
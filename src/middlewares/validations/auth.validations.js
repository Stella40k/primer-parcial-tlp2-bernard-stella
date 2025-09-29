import { body } from "express-validator";
import { UserModel } from "../../models/mongoose/user.model";

export const registerValidation = [
  // TODO: completar las validaciones para el registro
  body("username")
  .trim()
  .notEmpty().withMessage("Faltan campos obligatorios")
  .isLength({ min: 3, max: 50 }).withMessage("El campo solo puede tener entre 2 y 50 caracteres inclusive")
  .isAlphanumeric().withMessage("username debe ser alfanumérico")
  .custom(async (value, { req }) => {
    const user = UserModel.findOne({ username: value });
      if (user) {
        throw new Error("Username registrado");
      }
    }),
  body("email")
  .trim()
  .notEmpty().withMessage("Faltan campos obligatorios")
  .isEmail().withMessage("El email debe ser un formato válido"),
  body("password")
  .notEmpty().withMessage("Faltan campos obligatorios")
  .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/).withMessage("La contraseña debe contener al menos una minúscula"),
  body("role")
  .optional()
  .contains("secretary", "administrator").withMessage("el rol solo puede ser secretary o administrator"),
  body("profile.employee_number")
  .notEmpty().withMessage("faltan campos obligatorios"),
  body("profile.first_name")
  .notEmpty().withMessage("faltan campos obligatorios"),
  body("profile.last_name")
  .notEmpty().withMessage("faltan campos obligatorios"),
  body("profile.phone")
  .optional().notEmpty("elcampo no puede estar vacío"),
];

export const loginValidation = [
  // TODO: completar las validaciones para el login
  body("email")
  .trim()
  .notEmpty().withMessage("faltan campos obligatorios")
  .isEmail().withMessage(" elemail debe ser un formato válido"),
  body("password")
    .notEmpty().withMessage("faltan campos obligatorios")
    .isLength({ min: 8 }).withMessage("laa contraseña debe tener al menos 8 caracteres"),
];

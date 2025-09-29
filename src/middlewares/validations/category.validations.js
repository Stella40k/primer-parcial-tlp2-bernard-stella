import { body } from "express-validator";
import { CategoryModel } from "../../models/mongoose/category.model.js";

export const createCategoryValidation = [
  // TODO: completar las validaciones para crear una categoria
   body("name")
    .notEmpty().withMessage("faltan campos obligatorios")
    .isLength({ min: 3, max: 100 }).withMessage("el campo debe contener entre 3 y 100 caracteres inclusive")
    .custom(async (value) => {
      const catagory = CategoryModel.findOne({ name: value });
      if (catagory) {
        throw new Error("nombre registrado");
      }
    }),
  body("description")
    .optional()
    .notEmpty().withMessage("el campo no puede estar vacío")
    .isLength({ max: 500 }).withMessage("el campo solo puede contener hasta 500 caracteres inclusive"),
];

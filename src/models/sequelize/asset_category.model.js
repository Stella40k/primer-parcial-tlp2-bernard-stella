import { DataTypes } from "sequelize";
import { AssetModel } from "./asset.model.js";
import { CategoryModel } from "../mongoose/category.model.js";

export const AssetCategoryModel = sequelize.define("AssetCategory", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
});

// TODO: completar relaciones muchos a muchos entre Asset y Category mediante AssetCategory.
// * N:M Asset ↔ Category through AssetCategory
// * 'categories' (Asset) y 'assets' (Category)
// ! FALTA COMPLETAR ACA

//relaciones con tabla intermedia
AssetModel.belongsToMany(CategoryModel, {
  through: CategoryModel,
  foreignKey: "category_id",
  as: "category",
  onDelete: CASCADE,
});
CategoryModel.belongsToMany(AssetModel, {
  through: AssetModel,
  foreignKey: "asset_id",
  as: "asset",
  onDelete: CASCADE,
});

//relaciones para la tabla intermedia
AssetCategoryModel.belongsTo(CategoryModel,{
  foreignKey: "category",
  as: "asset",
  onDelete: CASCADE
});
AssetCategoryModel.belongsTo(AssetModel,{
  foreignKey: "asset_id",
  as: "asset",
  onDelete: CASCADE
});
 

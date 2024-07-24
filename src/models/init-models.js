import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _image from  "./image.js";
import _image_comment from  "./image_comment.js";
import _image_save from  "./image_save.js";
import _user from  "./user.js";

export default function initModels(sequelize) {
  const image = _image.init(sequelize, DataTypes);
  const image_comment = _image_comment.init(sequelize, DataTypes);
  const image_save = _image_save.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  image.belongsToMany(user, { as: 'user_id_users', through: image_save, foreignKey: "image_id", otherKey: "user_id" });
  user.belongsToMany(image, { as: 'image_id_images', through: image_save, foreignKey: "user_id", otherKey: "image_id" });
  image_comment.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(image_comment, { as: "image_comments", foreignKey: "image_id"});
  image_save.belongsTo(image, { as: "image", foreignKey: "image_id"});
  image.hasMany(image_save, { as: "image_saves", foreignKey: "image_id"});
  image.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image, { as: "images", foreignKey: "user_id"});
  image_comment.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image_comment, { as: "image_comments", foreignKey: "user_id"});
  image_save.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(image_save, { as: "image_saves", foreignKey: "user_id"});

  return {
    image,
    image_comment,
    image_save,
    user,
  };
}

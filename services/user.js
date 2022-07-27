const db = require("../models");
const joiSchema = require("../validators/user");

exports.create = async (data) => {
  try {
    const validData = await joiSchema.validateAsync(data);
    return await db.User.create(validData);
  } catch (err) {
    throw err;
  }
};

exports.getAll = async () => {
  return await db.User.findAll();
};

exports.getById = async (id) => {
  return await db.User.findByPk(id);
};

exports.update = async (id, data) => {
  try {
    const validData = await joiSchema.validateAsync(data);
    return await db.User.update(data, {
      where: {
        id,
      },
    });
  } catch (err) {
    throw err;
  }
};

exports.delete = async (id) => {
  return await db.User.destroy({ where: { id } });
};

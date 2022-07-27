// const db = require("../models");
// const joiSchema = require("../validators/user");

// exports.create = async (req, res, next) => {
//   try {
//     const validData = await joiSchema.validateAsync(req.body);
//     const data = await db.User.create(validData);

//     res.status(200).json({
//       status: 200,
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getAll = async (req, res, next) => {
//   try {
//     const data = await db.User.findAll();

//     res.status(200).json({
//       status: 200,
//       results: data.lenght,
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getById = async (req, res, next) => {
//   try {
//     const data = await db.User.findByPk(req.params.id);

//     res.status(200).json({
//       status: 200,
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// exports.updateById = async (req, res, next) => {
//   try {
//     // const data = await db.User.update(req.body, {
//     //   where: {
//     //     id: req.params.id,
//     //   },
//     // });

//     // res.status(200).json({
//     //   status: 200,
//     //   data,
//     // });
//     const user = await db.User.findByPk(2);

//     user.firstName = "test3";
//     console.log(user.toJSON());

//     await user.save();
//   } catch (error) {
//     next(error);
//   }
// };

// exports.deleteById = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const data = await db.Location.destroy({ where: { id } });

//     res.status(200).json({
//       status: 200,
//       dataLength: data.length || 1,
//       data,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

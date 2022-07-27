const createError = require("http-errors");
const service = require("../services/user");

exports.create = async (req, res, next) => {
  try {
    const user = await service.create(req.body);

    res.status(200).json({
      status: 200,
      data: {
        data: user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const users = await service.getAll();

    res.status(200).json({
      status: 200,
      results: users.length,
      data: {
        data: users,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const user = await service.getById(req.params.id);

    if (!user) return next(createError(404, "User not found"));

    res.status(200).json({
      status: 200,
      data: {
        data: user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const [result] = await service.update(req.params.id, req.body);

    // console.log(result);

    res.status(200).json({
      status: 200,
      data: {
        data: result,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const result = await service.delete(req.params.id);

    res.status(200).json({
      status: 200,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

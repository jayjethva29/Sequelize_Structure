const Joi = require("joi");

const joiSchema = Joi.object({
  firstName: Joi.string().case("lower").trim().min(2).max(20),
  lastName: Joi.string().trim().min(2).max(20),
  email: Joi.string().case("lower").email(),
  age: Joi.number().positive(),
}).when(Joi.object({ b: Joi.exist() }).unknown(), {
  then: Joi.object({
    a: Joi.valid("y"),
  }),
  otherwise: Joi.object({
    a: Joi.valid("z"),
  }),
});

module.exports = joiSchema;

// using promises

// const asyncHandler = (func) => {
//     (req,res,next) => (
//         Promise.resolve(func(req,res,next)).catch((error) => next(error))
//     )
// }

// using trycatch

const asyncHandler = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { asyncHandler };

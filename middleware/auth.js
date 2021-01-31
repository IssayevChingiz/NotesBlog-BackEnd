import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData;

    decodedData = jwt.verify(token, PROCESS.ENV.SECRET);

    req.userId = decodedData?.id;

    next();
  } catch (e) {
    console.log(e);
  }
};

export default auth;

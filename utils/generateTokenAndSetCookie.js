import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });

  // Set the token in an HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // Use secure cookies in production
    sameSite: "strict",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
  });
  return token;
};

export default generateTokenAndSetCookie;

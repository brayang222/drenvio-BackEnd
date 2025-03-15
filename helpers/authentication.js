import "dotenv/config";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export function generateToken(email) {
  return jwt.sign({ email }, secret, { expiresIn: "8h" });
}

export function verificateToken(req, res, next) {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("token: ", token);
  if (!token)
    return res.status(401).json({ error: "Acceso denegado, token requerido" });

  try {
    const dataToken = jwt.verify(token, secret);
    req.connectedEmail = dataToken.email;
    next();
  } catch (error) {
    console.error("Token no valido ", error);
    res.status(401).json({ error: "Token no valido" });
  }
}

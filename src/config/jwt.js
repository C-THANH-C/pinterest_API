import jwt from "jsonwebtoken"

export const createToken = (data) => {
    return jwt.sign({ data }, "BI_MAT", { expiresIn: "50m" })
}

export const verifyToken = token => jwt.verify(token, "BI_MAT", error => error)

export const decodeToken = (token) => {
    return jwt.decode(token)
}

export const middleToken = (req, res, next) => {
    let { token } = req.headers;
    let error = verifyToken(token);
    if (error)
        res.status(401).send(error.message);
    else
        next()

}
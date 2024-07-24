import { createToken } from "../config/jwt.js";
import { responseSend } from "../config/response.js"
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import bcrypt from "bcrypt"
let model = initModels(sequelize)
const login = async (req, res) => {
    let { email, password } = req.body;

    let checkUser = await model.user.findOne({
        where: {
            email
        }
    })
    if (checkUser) {
        if (bcrypt.compareSync(password, checkUser.password)) {
            let token = createToken({ userId: checkUser.dataValues.user_id })
            responseSend(res, token, "ĐĂNG NHẬP THÀNH CÔNG", 201)
        }
        else {
            responseSend(res, "", "SAI MẬT KHẨU", 403)
        }
    }
    else {
        responseSend(res, email, 'SAI EMAIL', 403)
    }

}
const signUp = async (req, res) => {
    let { email, password, fullName } = req.body;

    let checkUser = await model.user.findOne({
      
        where: {
            email,
        }
    })

    if (checkUser) {
        responseSend(res, email, 'EMAIL ĐÃ TỒN TẠI', 403)
    }
    else {
        let infoUser = {
            email: email,
            password: bcrypt.hashSync(password, 10),
            full_name: fullName,
            age: 0,
            image_avt: ""

        }
        let info = await model.user.create(infoUser)
        responseSend(res, info, "ĐĂNG KÝ THÀNH CÔNG", 200)
    }


}
export {
    login,
    signUp
}
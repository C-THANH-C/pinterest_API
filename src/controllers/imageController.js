import initModels from "../models/init-models.js"
import sequelize from "../models/connect.js"
import { responseSend } from "../config/response.js"
let model = initModels(sequelize)
const getImage = async (req, res) => {
    let data = await model.image.findAll()

    responseSend(res, data, 'IMAGE FULL', 200)
}
const getImageWithName = async (req, res) => {
    let nameImage = req.query.nameImage;
    let data = await model.image.findOne({
        where: {
            image_name: nameImage
        }
    })
    if (data) {
        responseSend(res, data, 'Không tìm thấy ảnh', 400)
    }
    else {
        responseSend(res, data, 'Thành công', 200)
    }

}
const getImageWithId = async (req, res) => {
    let { idImage } = req.params;
    let data = await model.image.findOne({
        include: ["user"],
        where: {

            image_id: idImage
        }
    })
    responseSend(res, data, 'Thành công', 200)
}
export {
    getImageWithId,
    getImage,
    getImageWithName
}
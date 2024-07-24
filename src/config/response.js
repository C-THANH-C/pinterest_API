export const responseSend = (res, data, message, code) => {
    res.status(code).send({
        statusCode: code,
        content: data,
        message,
        data: new Date()
    })

}
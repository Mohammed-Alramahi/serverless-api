//********************POST REQUEST *******************************/
/* const uudi = require('uuid').v4;
const model = require('./people.schema');
exports.handler = async (event) => {
    try {
        const { name, address } = JSON.parse(event.body);
        const id = uudi();
        const document = new model({
            id,
            name,
            address
        })
        const data = await document.save();
        return {
            statusCode: 201,
            body: JSON.stringify(data)
        }
    }
    catch (err) {
        return {
            statusCode: 500,
            body: err.message
        }
    }
} */

/*****************************GET REQUEST********************************/
/* const model = require('./people.schema');
exports.handler = async (event) => {
    try {
        const id = event?.pathParameters?.id;
        console.log(id);
        let data;
        if (id) {
            const result = await model.query('id').eq(id).exec();
            data = result[0];
            console.log("Result is :", result);
        }
        else {
            data = await model.scan().exec();
        }
        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    }
    catch (err) {
        return {
            statusCode: 500,
            body: err.message
        }
    }

} */
/**************************PUT REQUEST********************************/
/* const model = require('./people.schema');
exports.handler = async (event) => {
    try {
        const id = event?.pathParameters?.id;
        const { name, address } = JSON.parse(event.body);
        if (id) {
            const doc = await model.update({ id, name, address });
            let result = await doc.save();
            return {
                statusCode: 200,
                body: JSON.stringify(result)
            }
        }
    }
    catch (err) {
        return {
            statusCode: 500,
            body: err.message
        }
    }

} */
/******************************DELETE REQUEST********************************/
/*const model = require('./people.schema');
exports.handler = async (event) => {
    try {
        const id = event?.pathParameters?.id;
        if (id) {
            model.delete(id).then(res => {
                return {
                    statusCode: 201,
                    body: JSON.stringify(res)
                };

            });
        }
    }
    catch (err) {
        return {
            statusCode: 500,
            body: err.message
        };
    }
}*/
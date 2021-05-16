import { EnqueryModel } from '../model/model'

export class Resource {
    public async findData(
        name: string,
        emailId: string,
        mobileNo: string,
        message: string,
    ) {
        try {

            // let html = ` Hi, ${message}
            //     One of your friend had referred for this job please have a look `
            let school = new EnqueryModel()
            await school.defineSchema()
            await school.insertData(name, emailId, mobileNo, message)
        } catch (error) {
            throw error;
        }
    }
}

import { Document, Schema, SchemaTypes } from 'mongoose';
import * as mongoose from 'mongoose';
import * as UUID from 'uuid'

export interface IEnqueryDocuments extends Document {
    name : string,
    emailId : string,
    mobileNo : string,
    message: string,

}

export class EnqueryModel {
    EnqueryModel: mongoose.Model<IEnqueryDocuments>;
    // Method to define scheam
    public async defineSchema(
    ) {
        try {
            this.EnqueryModel = mongoose.model<IEnqueryDocuments>('enquery')
        } catch (e) {
            this.EnqueryModel = mongoose.model('enquery', new Schema({
                _id: SchemaTypes.String,
                name: SchemaTypes.String,
                emailId: SchemaTypes.String,
                mobileNo: SchemaTypes.String,
                message: SchemaTypes.String
            }, { versionKey: false }
            ));
        }
    }

    public async insertData(
        name: string
        , emailId: string
        , mobileNo: string
        , message: string
    ){
    console.log("mmmmmmmm", name, emailId);
        
        try {
            if (this.EnqueryModel != undefined) {
                await this.EnqueryModel.insertMany(
                    {
                        _id: UUID.v4()
                       , name: name
                       , emailId: emailId
                       , mobileNo: mobileNo
                       , message: message
                    });
            }
        } catch (error) {
            throw error;
        }
    }
}

// module.exports = mongoose.model('mydata', )

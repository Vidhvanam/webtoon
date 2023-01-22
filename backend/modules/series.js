import mongoose, { isObjectIdOrHexString } from "mongoose";
 
// create an schema
var seriesSchema = new mongoose.Schema({
          _id: mongoose.ObjectId,
          name:String,
          date:Date
        });
 
const seriesModel = new mongoose.model('series',seriesSchema);
export default  seriesModel 

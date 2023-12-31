import BaseModel from '../interfaces/base-model.js';

class JobModel extends BaseModel {
    static modelName = "Job"
    static schema = {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        handle: {
            type: String,
            required: true,
            unique: true
        },
        published: { 
            type: Boolean, 
            default: false 
        },
        createdAt: { 
            type: Date, 
            default: Date.now 
        },
    }
  }
  
  export default JobModel
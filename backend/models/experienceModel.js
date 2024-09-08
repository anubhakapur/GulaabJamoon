const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  description: { 
    type: String, 
    required: true 
},
  images: [{ 
    type: String, 
    required: true 
}],
location : {
    state: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    latitude: { 
        type: Number, 
        required: true 
    },
    longitude: { 
        type: Number, 
        required: true 
    }
}
,
  startDate: { 
    type: Date, 
    required: true 
},
  endDate: { 
    type: Date, 
    required: true 
},
  startTime: { 
    type: String, 
    required: true 
},
  duration: { 
    type: String, 
    required: true 
},
  overview: { 
    type: String, 
    required: true 
},
  highlights: [{ 
    type: String, 
    required: true 
}],
  cancellationPolicy: { 
    type: String, 
    required: true 
},
  knowBeforeYouGo: [{ 
    type: String, 
    required: true 
}],

}, { timestamps: true });

const experienceModel = mongoose.model('Experience', experienceSchema);

module.exports = experienceModel;
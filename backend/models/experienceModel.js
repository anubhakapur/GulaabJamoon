const mongoose = require('mongoose');
const formatDate = require('../utils/formatDate');

const experienceSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
url : {
    type: String, 
    required: true
},
  description: { 
    type: String, 
    required: true 
},
  shortDescription: {
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
    required: true,
    get: function(date) {
      return formatDate(date);
    } 
},
  endDate: { 
    type: Date, 
    required: true,
    get: function(date) {
      return formatDate(date);
    } 
},
  startTime: { 
    type: String, 
    required: true,
     
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
  itinerary: [{ 
    type: String, 
    required: true
}],
inclusions: [{
    type: String, 
    required: true
}],
exclusions: [{
    type: String, 
    required: true
}],
  cancellationPolicy: { 
    type: String, 
    required: true 
},
  faqs: [{ 
    question: { 
        type: String, 
        required: true 
    },
    answer: { 
        type: String, 
        required: true 
    }
}],
price: {
    type: Number, 
    // required: true
},
  knowBeforeYouGo: [{ 
    type: String, 
    required: true 
}],
status : {
  type : String,
  enum : ['Live','Inactive','Hold'],
  default : 'Live'
}

}, { timestamps: true });

const experienceModel = mongoose.model('Experience', experienceSchema);

module.exports = experienceModel;
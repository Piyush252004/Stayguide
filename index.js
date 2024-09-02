// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const multer = require('multer');
// const path = require('path');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use('/images', express.static(path.join(__dirname, 'public/images')));

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, 'public/images/');
//   },
//   filename: function(req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage: storage });

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/pg-directory', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB', err);
// });

// // Define Property Schema and Model
// const propertySchema = new mongoose.Schema({
//   name: String,
//   gender: String,
//   contactPersonName: String,
//   email: String,
//   mobile: String,
//   pgRegNo: String,
//   propertyAddress: String,
//   description: String,
//   landmark: String,
//   state: String,
//   city: String,
//   gateCloseTime: String,
//   foodAvailability: String,
//   rooms: Number,
//   image: String,
//   setupRooms: [{
//     roomType: String,
//     monthlyRent: String,
//     depositAmount: String,
//     acNonAc: String
//   }],
//   amenities: {
//     houseKeeping: Boolean,
//     gym: Boolean
//     // Add more amenities as needed
//   },
//   rules: {
//     noDrinking: Boolean,
//     noSmoking: Boolean
//   },
//   interested: { type: Number, default: 0 }
// });

// const Property = mongoose.model('Property', propertySchema);

// // Route to Add Property
// app.post('/properties', upload.single('image'), async (req, res) => {
//   try {
//     const setupRooms = JSON.parse(req.body.setupRooms);
//     const amenities = JSON.parse(req.body.amenities);
//     const rules = JSON.parse(req.body.rules);

//     const property = new Property({
//       name: req.body.name,
//       gender: req.body.gender,
//       contactPersonName: req.body.contactPersonName,
//       email: req.body.email,
//       mobile: req.body.mobile,
//       pgRegNo: req.body.pgRegNo,
//       propertyAddress: req.body.propertyAddress,
//       description: req.body.description,
//       landmark: req.body.landmark,
//       state: req.body.state,
//       city: req.body.city,
//       gateCloseTime: req.body.gateCloseTime,
//       foodAvailability: req.body.foodAvailability,
//       rooms: req.body.rooms,
//       setupRooms,
//       amenities,
//       rules,
//       image: req.file ? `/images/${req.file.filename}` : null
//     });

//     await property.save();
//     res.status(201).json(property);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/api/pgs/:pgId', async (req, res) => {
//     try {
//       const pgId = req.params.pgId;
//       const property = await Property.findById(pgId);
//       if (!property) {
//         return res.status(404).json({ error: 'PG not found' });
//       }
//     res.json(property);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// // Start the server
// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/images/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pg-directory', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define Property Schema and Model
const propertySchema = new mongoose.Schema({
  name: String,
  gender: String,
  contactPersonName: String,
  email: String,
  mobile: String,
  pgRegNo: String,
  propertyAddress: String,
  description: String,
  landmark: String,
  state: String,
  city: String,
  gateCloseTime: String,
  foodAvailability: String,
  rooms: Number,
  image: String,
  setupRooms: [{
    roomType: String,
    monthlyRent: String,
    depositAmount: String,
    acNonAc: String
  }],
  amenities: {
    houseKeeping: Boolean,
    gym: Boolean
    // Add more amenities as needed
  },
  rules: {
    noDrinking: Boolean,
    noSmoking: Boolean
  },
  interested: { type: Number, default: 0 }
});

const Property = mongoose.model('Property', propertySchema);

// Route to Add Property
app.post('/properties', upload.single('image'), async (req, res) => {
  try {
    const setupRooms = JSON.parse(req.body.setupRooms);
    const amenities = JSON.parse(req.body.amenities);
    const rules = JSON.parse(req.body.rules);

    const property = new Property({
      name: req.body.name,
      gender: req.body.gender,
      contactPersonName: req.body.contactPersonName,
      email: req.body.email,
      mobile: req.body.mobile,
      pgRegNo: req.body.pgRegNo,
      propertyAddress: req.body.propertyAddress,
      description: req.body.description,
      landmark: req.body.landmark,
      state: req.body.state,
      city: req.body.city,
      gateCloseTime: req.body.gateCloseTime,
      foodAvailability: req.body.foodAvailability,
      rooms: req.body.rooms,
      setupRooms,
      amenities,
      rules,
      image: req.file ? `/images/${req.file.filename}` : null
    });

    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Route to Get All Properties
app.get('/properties', async (req, res) => {
    try {
      const properties = await Property.find();
      res.json(properties);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Route to Get Property by ID
  app.get('/api/pgs/:pgId', async (req, res) => {
    try {
      const pgId = req.params.pgId;
      console.log(pgId)
      const property = await Property.find({city: pgId});
      console.log(property)
      
      if (!property) {
        res.status(404).json({ error: 'PG not found' });
      } else {
        res.status(200).json(property);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Route to Update Property Interested Count
  app.patch('/properties/:id', async (req, res) => {
    try {
      const propertyId = req.params.id;
      const { interested } = req.body;
      const updatedProperty = await Property.findByIdAndUpdate(
        propertyId,
        { interested },
        { new: true }
      );
      if (!updatedProperty) {
        return res.status(404).json({ error: 'Property not found' });
      }
      res.json(updatedProperty);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
// const AdminModel = require('./src/server/models/AdminSignup')

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

// image upload for user profile
require("./imageDetails");
const Images = mongoose.model("")

app.use('/api', userRoute);

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
    gym: Boolean,
    sofa: Boolean,
    diningTable: Boolean,
    bedCotPillow: Boolean,
    hotWater: Boolean,
    readingRoom: Boolean,
    wardrobes: Boolean,
    newsPaper: Boolean,
    toiletsAttached: Boolean,
    safetyLockers: Boolean,
    cctv: Boolean,
    lift: Boolean,
    kitchen: Boolean,
    separateEbMeter: Boolean,
    mineralRoWater: Boolean,
    microwaveOven: Boolean,
    geyser: Boolean,
    refrigerator: Boolean,
    wifi: Boolean,
    television: Boolean,
    security: Boolean,
    laundry: Boolean,
    washingMachine: Boolean,
    ac: Boolean,
    parking: Boolean,
    powerBackup: Boolean
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
app.get('/api/pgs/:city', async (req, res) => {
  console.log(`Received city parameter: ${req.params.city}`);
  try {
    const city = req.params.city;
    // console.log(pgId);
    const property = await Property.find({city:city});

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
app.patch('/properties', async (req, res) => {
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

// admin signup logic
// app.post('/adminSignup',(req, res) => {
//   AdminModel.create(req.body)
//   .then(employees => res.json(admin))
//   .catch(err => res.json(err))
// })
// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

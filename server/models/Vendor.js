import mongoose from 'mongoose';

const vendorSchema = mongoose.Schema(
  {
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
    buisnessName: { type: String, required: true, minLength: 2, maxLength: 150 },
    cuisineType: { type: String, required: true, minLength: 2, maxLength: 150 },
    menu: { type: String, required: true, minLength: 2, maxLength: 150 },
    contactInformation: { type: String, required: true, minLength: 2, maxLength: 150 },
    images: {
      type: [String],
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
    uid: { type: String, required: true },
    uName: { type: String, required: true },
    uPhoto: { type: String, default: '' },
  },
  { timestamps: true }
);

const Vendor = mongoose.model('vendors', vendorSchema);

export default Vendor;
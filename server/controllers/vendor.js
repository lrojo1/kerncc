import Vendor from '../models/Vendor.js';
import tryCatch from './utils/tryCatch.js';

export const createVendor = tryCatch(async (req, res) => {
  const { id: uid, name: uName, photoURL: uPhoto } = req.user;
  const newVendor = new Vendor({ ...req.body, uid, uName, uPhoto });
  await newVendor.save();
  res.status(201).json({ success: true, result: newVendor });
});


export const getVendors = tryCatch(async (req, res) => {
    const vendors = await Vendor.find().sort({ _id: -1 });
    res.status(200).json({ success: true, result: vendors });
  });
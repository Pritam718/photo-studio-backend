// import {v2 as cloudinary} from 'cloudinary';
const cloudinary=require('cloudinary').v2;
          
cloudinary.config({ 
  cloud_name: 'ddplg7gwd', 
  api_key: '498653873978335', 
  api_secret: 'nM7hC0U-U-ApdvQllcA-GQDIyqM' 
});
module.exports=cloudinary
import { v2 as cloudinary } from 'cloudinary'
export default new (class Cloudinary {
  config() {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });
  }

  async destination(song: string) {
    try {
      const cloudResponse = await cloudinary.uploader.upload(`../BE/src/upload/${song}`, { folder: 'Songs', resource_type: "video" });
      return cloudResponse.secure_url
    } catch (error) {
      throw error;
    }
  }

  async destinationImage(images: string) {
    try {
      const cloudResponse = await cloudinary.uploader.upload(`../BE/src/upload/${images}`, { folder: 'Images' });
      return cloudResponse.secure_url
    } catch (error) {
      throw error;
    }
  }

})();

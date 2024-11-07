import mongoose from 'mongoose';

export const connectMongo = async () => {
  const connectionState = mongoose.connection.readyState;

  if(connectionState===1) {
    console.log('already connected to db');
    return;
  }else{
    const url = String(process.env.DB_URL)
    try {
      await mongoose.connect(url, {
        useNewUrlParser: true,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
      process.exit(1);
    }
  }   
};

export default connectMongo;

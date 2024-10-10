import mongoose from 'mongoose';
const dbName = 'todolist'
const user='manueltylerdurden'

const password='Padedda16'

const connectionUrl = `mongodb+srv://
${user}:${password}
@clustertodolist.dvzc7.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ClusterToDoList'`
const connect = async () => {
  try {
    await mongoose.connect(connectionUrl);
    console.log('- Connected to MongoDB server');
  } catch (error) {
    console.log('- Connection error', error);
    throw(error);
  }
}
export default connect;


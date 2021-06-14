import dotenv from 'dotenv'

dotenv.config()

export const BACKEND_URL=process.env.NODE_ENV === 'development'?"http://localhost:5000/": "mongodb+srv://mjarman1:Indians40@cluster0.wh36m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
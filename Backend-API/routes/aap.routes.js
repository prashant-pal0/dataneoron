import userRouter from "../src/users/user.router.js";
const appRouter = (app, express) => {

    app.use(express.json())
     app.use('/user', userRouter)
    }
    
    export default appRouter;
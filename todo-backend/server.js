const express=require('express');
const { default: mongoose } = require('mongoose');
const cors=require('cors');



    const app=express();
    app.use(express.json());
    app.use(cors())


    // let todos=[];

    mongoose.connect("mongodb://localhost:27017/mern-app")
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    })

    const todoSchema=new mongoose.Schema({
        title:{
            required:true,
            type:String
        },
        description:String
    })

    const todoModel=mongoose.model('Todo',todoSchema);


    app.post("/todos",async(req,res)=>{
        const {title,description}=req.body;
        // const newTodo={
        //     id:todos.length+1,
        //     title,
        //     description
        // };
        // todos.push(newTodo)
        // console.log(todos);
        try{
            const newTodo=new todoModel({title,description})
            await newTodo.save()
            res.status(201).json(newTodo)
        }catch(error){
            console.log(error);
            res.status(500).json({message: error.message})
        }
    })


    app.get("/todos",async(req,res)=>{
        try{
          const todos= await todoModel.find();
           res.json(todos)
        }catch(error){
            console.log(error);
            res.status(500).json({message: error.message})
        }
    })



    app.put("/todos/:id",async(req,res)=>{
        try{
        const {title,description}=req.body;
        const id=req.params.id;
        const updateedTodo = await todoModel.findByIdAndUpdate(
            id,
            {title,description},
            {new:true}
        )
        if(!updateedTodo){
            return res.status(404).json({message: "Todo not found"})
        }
        res.json(updateedTodo)
        }catch(error){
            console.log(error);
            res.status(500).json({message: error.message})
        }
        
    })


    app.delete("/todos/:id",async(req,res)=>{
        try{
        const id=req.params.id;
        await todoModel.findByIdAndDelete(id);
        res.status(204).end();
        }
        catch(error){
            console.log(error);
            res.status(500).json({message: error.message})
        }
        
    })


    const port=8000;
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
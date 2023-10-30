const mongoose = require("mongoose");

     mongoose.connect("mongodb://0.0.0.0:27017/ttchanell")
    .then(()=>console.log("Connection Sucesfull...."))
    .catch((err)=>console.log(err));

 const playlistSchema=new mongoose.Schema({
    name:{
        type:String
        //required:true
    },
     ctype:String,
     videos:Number,
     author:String,
     active:Boolean,
    //  date:{
    //     type:Date,
    //     default:Datenow
    //  }
 })   
//collection creation

const Playlist=new mongoose.model("Playlist",playlistSchema);

//create a document or insert
 const createDocument=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"Node Js",
            ctype:"Back End",
            videos:80,
            active:true
        })
        const result=await reactPlaylist.save();
        console.log(result)
    }catch(err){
         console.log(err)
    }
 }

//  createDocument()

//create a multiple Document 

const createMulDocument=async ()=>{
    try{
        const jsPlaylist=new Playlist({
            name:"Javascript",
            ctype:"Front End",
            videos:150,
            author:"Thapa Technical",
            active:true
        })
        const mongodbPlaylist=new Playlist({
            name:"MongoDb",
            ctype:"DataBase",
            videos:50,
            author:"Thapa Technical",
            active:true
        })
        const mongoosePlaylist=new Playlist({
            name:"Mongoose",
            ctype:"DataBase",
            videos:40,
            author:"Thapa Technical",
            active:true
        })
        const expressPlaylist=new Playlist({
            name:"Express",
            ctype:"Back End",
            videos:50,
            author:"Thapa Technical",
            active:true
        })
     const result=await Playlist.insertMany([jsPlaylist,mongodbPlaylist,mongoosePlaylist,expressPlaylist]);
     console.log(result) 
        
    }catch(err){
      console.log(err);
    }
}
//createMulDocument();

//querying in the document 

// const getDocument= async()=>{
//     const result=await Playlist.find();
//     console.log(result);
// }

const getDocument= async()=>{
        try{
            const result=await Playlist.find()
            .countDocuments();
            console.log(result)
        }catch(err){
            console.log(err)
        }
    }

//getDocument()

//MongoDB update the Document using Mongoose








  
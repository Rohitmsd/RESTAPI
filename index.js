
//  const mongoose=require('mongoose');

//  mongoose.connect("mongodb://0.0.0.0:27017/rohitdb")
//  .then(()=> console.log('Connection SucessFull !!!!  '))
//  .catch((err)=> console.log(err));


// //create a Schema 
// const playlistSchema=new mongoose.Schema({
//       name:String,
//       ctype:String,
//       videos:Number,
//       author:String,
//       active:Boolean
// })
// //Create a Model(collection Creation)
// const playlist=new mongoose.model("rohitsingh",playlistSchema)

// //Create your Document 
// const createDocument=async()=>{
//     try{
//         const nodePlaylist=new playlist({
//             name:"NodeJS",
//             ctype:"Back End",
//             videos:80,
//             author:"Rohit Singh",
//             active:true
//         })
//         const result= await nodePlaylist.save();
//         console.log(result)
//     }catch(err){
//        console.log(err)
//     }
// }

// //createDocument();
// //create Multiple Document
// const createMulDocument=async()=>{
//     try{
//         const reactPlaylist=new playlist({
//             name:"ReactJs",
//             ctype:"Fort End",
//             videos:150,
//             author:"Rohit Singh",
//             active:true
//        })
//        const javascriptPlaylist=new playlist({
//         name:"Javascript",
//         ctype:"Fort End",
//         videos:500,
//         author:"Rohit Singh",
//         active:true
//      })
//      const expressPlaylist=new playlist({
//         name:"ExpressJs",
//         ctype:"Back End",
//         videos:180,
//         author:"Rohit Singh",
//         active:true
//      })
//      const mongodblaylist=new playlist({
//         name:"MongoDB",
//         ctype:"Back End",
//         videos:99,
//         author:"Rohit Singh",
//         active:true
//     })
//       const result=await playlist.insertMany([reactPlaylist, javascriptPlaylist,expressPlaylist,mongodblaylist]);
//      console.log(result) 

       
//     }catch(err){
//         console.log(err)
//     }
// }

// //createMulDocument()

// const getDocument= async()=>{
//     try{
//         const result=await playlist.find()
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// //getDocument()
// //Delete  in document
// const deleteDocument=async(_id)=>{
//     try{
//         const result=await playlist.deleteOne({_id});
//         console.log(result);
//       }catch(err){
//         console.log(err)
//       }
// }
// //deleteDocument('647770bf0721ca0752aace04')

// //Update in Nodejs
// const updateDocument=async(_id)=>{
//     try{
//         const result=await playlist.updateOne({_id},{
//             $set:{
//                 name:"Sql"
//             }
//         })
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// updateDocument('647777614cfcfeb40e7b1f6a')

// const prompt=require('prompt');
// // Gets user input
// var name = prompt("What is your name?");
// var num = prompt("What is your favorite number? ");

// // Uses user input to print out information
// println("Hello " + name + "!");
// println(num + "?! That's my favorite number too!");

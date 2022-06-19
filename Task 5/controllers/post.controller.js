const dbConnect = require("../db/connect")
const {ObjectId} = require("mongodb")
const { stat } = require("fs");
class Post{
    static home = (req, res)=> { 
        dbConnect(db=>
            db.collection("posts").find().toArray((error, data)=>{
            res.render("home", {
                pageTitle:"all Users",
                data,
                isEmpty: !data.length
            })
        }))
        
    }
    
    static addPost = (req, res)=> { 
        res.render("addpost", {
            pageTitle:"Add User"
        })   
    }
    static addPostLogic = (req,res)=>{
       const post =req.body
       //ins to db
       dbConnect((db)=>{
        db.collection('posts').insertOne(post)
        .then(()=>res.redirect("/"))
        .catch(e=> console.log(e))
       })
    }

    
    static edit =  (req, res)=> { 
        const postId = req.params.id
        dbConnect(db=>{
            db.collection("posts").findOne({_id:new ObjectId(postId)})
            .then(postData=>
                res.render("edit", {
                    pageTitle:"Edit User",
                    postData
                })
            )
            .catch(e=> console.log(e))
        })
        
        }

       
        static editLogic = (req,res)=>{
            dbConnect(db=>{
                db.collection("posts")
                .updateOne(
                    {_id:new ObjectId(req.params.id)},
                    {$set:req.body}
                )
                .then(res.redirect("/"))

            })
        }
    static single = (req, res)=> { 
        const postId = req.params.id
        dbConnect(db=>{
            db.collection("posts").findOne({_id:new ObjectId(postId)})
            .then(postData=>
                res.render("single", {
                    pageTitle:"single User",
                    postData
                })
            )
            .catch(e=> console.log(e))
        })
    }

//changeStatu

    static activeOr=(req,res)=>{
        const postID=req.params.id
        let status=req.params.status

        if(status=="active")
        {
          console.log(status)
          status="inactive",
          
          console.log(status)
        }
        else{
          status="active"
        }
          dbConnection((db)=>{
              db.collection("posts")
              .updateOne({ _id: new ObjectId(postID)},{$set:{"status":status}})
              .then(
                  res.redirect("/")
              )
          })
      }


    static delItem = (req,res)=>{
        const postId = req.params.id
        dbConnect(db=>
        db.collection("posts").deleteOne({_id:new ObjectId(postId)})
        .then(r=>res.redirect("/"))
        )
    }
}
module.exports = Post
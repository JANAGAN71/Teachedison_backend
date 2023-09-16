// const router = require("express").Router();
// // const User = require("../models/User");
// const Post = require("../models/Post");
// const bcrypt = require("bcrypt");


// //CREATE ARTCLE
// router.post("/", async (req, res) => {
//     const newPost = new Post(req.body);

//     try {
//         const savedPost = await newPost.save();
//         res.status(200).json(savedPost);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// });

// //UPDATE ARTICLE
// router.put("/:id", async (req, res) => {
//     try {

//         const post = await Post.findById(req.params.id);
//         if (post.username === req.body.username) {
//             try {
//                 const updatedArticle = await Post.findByIdAndDelete(
//                     req.params.d, {
//                     $set: req.body,
//                 },
//                     { new: true }
//                 );
//                 res.status(200).json(updatedArticle);
//             }
//             catch (err) {
//                 res.status(500).json(err);
//             }
//         }
//         else {
//             res.status(401).json("You cannot update this article");
//         }
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// });


// //DELETE
// router.delete("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (!post) {
//             // If the post with the given ID is not found, respond with a 404 status.
//             return res.status(404).json("Article not found");
//         }

//         if (post.username === req.body.username) {
//             try {
//                 await post.remove(); // Use post.remove() instead of post.delete()
//                 res.status(200).json({ message: "Article has been deleted" });
//             } catch (err) {
//                 res.status(500).json(err);
//             }
//         } else {
//             res.status(401).json("You cannot delete this article");
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// //GET POST
// router.get("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         res.status(200).json(post);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// });


// // GET ALL ARTICLE
// router.get("/", async (req, res) => {
//     const username = req.query.user;
//     const CategoriesName = req.query.cate;
//     try {
//         let posts;
//         if (username) {
//             posts = await Post.find({ username });
//         }
//         else if (CategoriesName) {
//             posts = await Post.find({
//                 categories: {
//                     $in: [CategoriesName],
//                 },
//             });
//         }
//         else {
//             posts = await Post.find();
//         }
//         res.status(200).json(posts);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// });

// module.exports = router;

const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
    try{
        const data = await Post.find();
        res.send(data);
    }
    catch(err){
        res.send(err);
    }

    // const title = req.query.title;
    // const catName = req.query.cat;
    // try {
    //     let posts;
    //     if (title) {
    //         posts = await Post.find({ title });
    //     } 
    //     else if (catName) {
    //         posts = await Post.find({
    //             categories: {
    //                 $in: [catName],
    //             },
    //         });
    //     }
    //     res.status(200).json(posts);
    // } catch (err) {
    //     res.status(500).json(err);
    // }
});

module.exports = router;
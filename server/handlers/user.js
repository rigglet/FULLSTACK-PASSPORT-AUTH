const db = require("../models");

exports.createUser = async function (req, res, next) {
  try {
    //console.log(req.params);
    //const user = await db.User.findById(req.params.user_id);
    //return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.deleteUser = async function (req, res, next) {
  try {
    //console.log(req.params);
    //const user = await db.User.findById(req.params.user_id);
    //return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.getUsers = async function (req, res, next) {
  try {
    //console.log(req.params);
    //const user = await db.User.findById(req.params.user_id);
    //return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.getUser = async function (req, res, next) {
  try {
    //console.log(req.params);
    const user = await db.User.findById(req.params.user_id);
    //return 200 ok
    return res.status(200).json(user);
  } catch (err) {
    return next(err);
  }
};

exports.updateUser = async function (req, res, next) {
  try {
  } catch (err) {
    return next(err);
  }
};

// exports.updateUser = async function (req, res, next) {
//   const id = req.params.user_id;
//   const option = req.query.profile_option;
//   let updatedUser = {};

//   try {
//     const foundUser = await db.User.findById(id).populate("profileImageUrl");

//     //clearing image back to default
//     if (option === "CLEAR") {
//       if (foundUser.profileImageUrl !== null) {
//         try {
//           //delete file from server directory
//           await unlink(
//             `./public/uploads/${foundUser.profileImageUrl.fileName}`
//           );

//           //delete existing document from db
//           await db.Image.deleteOne({ _id: foundUser.profileImageUrl._id });

//           //delete from aws bucket
//           await getHeadObject(foundUser.profileImageUrl.fileName);

//           //delete file from AWS storage
//           await deleteSavedImage(foundUser.profileImageUrl.fileName);
//         } catch (err) {
//           //log error but don't pass to next()
//           console.log(err.message, " : ", err.code);
//         }

//         updatedUser = {
//           ...foundUser.toObject(),
//           profileImageUrl: null,
//           username: req.body.username,
//         };
//       }
//     }

//     //uploading a new image
//     if (option === "NEW") {
//       if (foundUser.profileImageUrl !== null) {
//         try {
//           await unlink(
//             `./public/uploads/${foundUser.profileImageUrl.fileName}`
//           );
//         } catch (err) {
//           console.log(err);
//         }

//         //delete existing document from collection
//         await db.Image.deleteOne({ _id: foundUser.profileImageUrl._id });
//       }

//       //create new image entry
//       const newImage = await db.Image.create({
//         fileName: req.file.filename,
//         category: req.body.category,
//         description: "profile image",
//       });

//       //add to user
//       updatedUser = {
//         ...foundUser.toObject(),
//         profileImageUrl: newImage._id,
//         username: req.body.username,
//       };

//       //delete existing file from AWS storage
//       //check if object exists by trying to return head object
//       try {
//         console.log("AWS filename: ", req.file.filename);
//         await getHeadObject(req.file.filename);

//         //delete file from AWS storage
//         await deleteSavedImage(req.file.filename);
//       } catch (err) {
//         console.log(err);
//       }

//       //upload file to AWS S3 storage
//       await uploadFile(req.file);
//     }

//     if (option === "NAME") {
//       //add to user
//       updatedUser = {
//         ...foundUser.toObject(),
//         username: req.body.username,
//       };
//     }

//     //REGARDLESS OF OPTION:
//     // update user
//     await db.User.where({ _id: id }).update(updatedUser);

//     //get user and populate image data
//     const returnedUser = await db.User.findById(id).populate(
//       "profileImageUrl",
//       {
//         fileName: true,
//         profileImageUrl: true,
//       }
//     );

//     return res.status(200).json(returnedUser);
//   } catch (err) {
//     return next(err);
//   }
// };

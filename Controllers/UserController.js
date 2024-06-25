import User from "../Models/UserModel.js";

//create user

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(200)
      .json({ message: "User created successfully", result: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in Create User" });
  }
};


// get user

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ message: "Users fetched successfully", result: users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error in Get Users" });
  }
};

//update user

export const updateUser = async (req, res) => {
    try {
      const id  = req.params.id
    const updatedUser = await User.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
    })
    res
    .status(200)
    .json({ message: "User Updated successfully" , result: updatedUser });
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: "Internal Server Error in Update User" });
    }
}

// delete user

export const deleteUser = async (req, res) => {
    try {
      const id  = req.params.id
    const deletedUser = await User.findByIdAndDelete({_id:id})
    res
    .status(200)
    .json({ message: "User Deleted successfully"});
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: "Internal Server Error in Delete User" });
    }
}

//get user BY ID
export const getUserById = async (req, res) => {
    try {
      const id  = req.params.id
    const user = await User.findById({_id:id})
    res
    .status(200)
    .json({ message: "User fetched successfully", result: user });
    } catch (error) {
        console.log(error);
    res.status(500).json({ message: "Internal Server Error in Get User By ID" });
    }
}
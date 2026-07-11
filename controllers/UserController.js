import User from "../models/UserModel.js"

export const userForm = (req,res) =>{
    res.render('user/create')
}

export const storeUser = async(req,res) =>{
    let message = ''
    const {name, address, email, dateOfBirth} = req.body
    const newUser = new User({
        name,
        address,
        email,
        dateOfBirth
    })

    if(!newUser){
        message = "Error occured : "+ newUser
        res.redirect('/user/create')
    }else {
        await newUser.save()
        message = 'New User Created'
        res.redirect('/user')
    }
}

export const dashboardUser = async (req,res) => {
    const users = await User.find().lean()
    res.render('user/dashboard', {
        title: 'User Homepage',
        user: users
    })
}
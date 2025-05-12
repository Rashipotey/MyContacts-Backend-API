const asyncHandler=require("express-async-handler");
const Contact=require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts= asyncHandler(async(req,res)=>{
    const contacts=await Contact.find({user_id: req.user.id});
    if(!contacts){
        res.status(404);
        throw new Error("Contacts not found");
    }
    res.status(200).json(contacts);
})

//@desc Get individual contacts
//@route GET /api/contacts/:id
//@access private
const getContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        req.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
})

//@desc Update contacts
//@route GET /api/contacts/:id
//@access private
const updateContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        req.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have permission to update other user contact");
    }
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedContact);
})

//@desc  Create New contact
//@route GET /api/contacts
//@access private
const createContact= asyncHandler(async(req,res)=>{
    console.log("Requested body is: ",req.body)
    const {name, email,phone}=req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are manadatory");
    }
    const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    });
    res.status(201).json(contact);
})

//@desc  Delete New contacts
//@route GET /api/contacts
//@access private
const deleteContact= asyncHandler(async(req,res)=>{
    const contact=await Contact.findById(req.params.id);
    if(!contact){
        req.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User doesn't have permission to update other user contact");
    }
    await Contact.deleteOne({_id:req.params.id});
    res.status(200).json(contact);
})

module.exports={
    getContacts, 
    getContact, 
    createContact, 
    updateContact, 
    deleteContact,
};


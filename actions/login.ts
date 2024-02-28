"use server"

import { signIn } from "@/auth"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"
import { z } from "zod"
import { getUserByEmail } from "@/data/user"
import { generateVerificationToken } from "@/lib/tokens"
import { sendVerificationEmail } from "@/lib/mail"

export const login=async(values:z.infer<typeof LoginSchema>)=>
{
    const validateFiels=LoginSchema.safeParse(values)
    if(!validateFiels.success)
    {
        return {error:"Invalid fields"}
    }
    const {email,password}=validateFiels.data
    const existingUser=await getUserByEmail(email)
    if(!existingUser || !existingUser.email || !existingUser.password)
    {
        return {error:"EMAIL DOES NOT EXIST"}
    }
    // if(!existingUser.emailVerified)
    // {
    //     const verificationToken=await generateVerificationToken(existingUser.email)
    //     await sendVerificationEmail(existingUser.email,verificationToken.token)
    //     return {succes:"Confirmation Email sent"}

    // }
    existingUser.emailVerified=new Date()
    try{
        await signIn('credentials',{email,password,redirectTo:"/dashb"})
        
        return {success:"Logged in"}
    }catch(error:any){
        if(error instanceof AuthError)
        {
            switch(error.type)
            {
                case"CredentialsSignin":
                return {error:"Invalid credentials"}
                default:
                return {error:"An error occurred"}
            }
        }
        throw error


    }

}
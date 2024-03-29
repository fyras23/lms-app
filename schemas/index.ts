import * as z from 'zod';


export const LoginSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"

    })
})
export const RegisterSchema = z.object({
    email: z.string().email({message: "Please enter a valid email"}),
    
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"

    }),
    name: z.string().min(3, {
        message: "Name must be at least 3 characters long"

}),
    role: z.string().min(1, {
        message: "Please select a role"

})
})

export const ResetSchema=z.object({
    email:z.string().email({message:"Please enter a valid email"})
})

export const NewPasswordSchema=z.object({
    password:z.string().min(6,{message:"Password must be at least 6 characters long"})
})

export const ProfileSchema=z.object({
    date:z.date().refine((date)=>date!==undefined,{message:"Please select a date"}),
    optionSelected:z.string().min(1,{message:"Please select a field"}),
    about:z.string().min(0,{message:"Please enter a valid about"}),
    imageUrl:z.string().min(1,{message:"Please enter a valid image url"}),
    country:z.string().min(1,{message:"please select you country"})
})

export const QuizSchema=z.object({
    question:z.string().min(1,{message:"Please enter a question"}),
    option1:z.string().min(1,{message:"Please enter option 1"}),
    option2:z.string().min(1,{message:"Please enter option 2"}),
    option3:z.string().min(1,{message:"Please enter option 3"}),
    option4:z.string().min(1,{message:"Please enter option 4"}),
    
})




"use client";
import { FacebookIcon, HomeIcon, InstagramIcon, Link, MailIcon, TwitterIcon } from 'lucide-react';
import { useState } from 'react';


import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';


interface ContactFormData {
    name: string;
    lname: string;
    email: string;
    message: string;
}

const formSchema = z.object({
    name: z.string().min(1, { message: "assigName is required" }),
    lname: z.string().min(1, { message: "assigName is required" }),
    email: z.string().min(1, { message: "email is required" }),
    message: z.string().min(1, { message: "message is required" }),

});

export default function Footer() {
    const [showPopup, setShowPopup] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(formSchema),
    });

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    const onSubmit = async (data: ContactFormData) => {
        try {
            // Send form data to your backend
            await axios.post('/api/contact/', data);
            // Show success message
            toast.success("Message sent successfully!");
            // Close the popup
            togglePopup();
        } catch (error) {
            // Handle error
            console.error("Failed to send message:", error);
            toast.error("Failed to send message. Please try again later.");
        }
    };

    return (
        <footer className="w-full py-6 md:py-12 border-t border-gray-300 pt-4">
            <div className="container grid md:grid-cols-[1fr_300px] items-start justify-between px-4 gap-6 text-center md:text-left md:gap-8 md:px-6">
                <div className="space-y-4">
                    <Link
                        className="inline-flex items-center space-x-2 text-2xl font-bold tracking-wider shadcn-transition dark:text-gray-50"
                        href="#"
                    >
                        <HomeIcon className="w-5 h-5 rounded-lg" />
                        Home
                    </Link>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        The e-learning platform for the next generation. Access knowledge anytime, anywhere.
                    </p>
                </div>
                <div className="grid gap-4 text-sm">
                    <div className="space-y-1">
                        <h4 className="inline text-lg font-semibold">About Us</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            We're on a mission to make learning fun and accessible to all.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="inline text-lg font-semibold">Contact Us</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Email: contact@elearningplatform.com
                            <br />
                            Phone: +1 123-456-7890
                            <br />
                            Address: 123 Street, City, Country
                        </p>
                    </div>
                    <div className="space-y-1">
                        <h4 className="inline text-lg font-semibold">Social Media</h4>
                        <div className="flex items-center gap-2">
                            <FacebookIcon className="w-4 h-4 rounded-lg" />
                            <TwitterIcon className="w-4 h-4 rounded-lg" />
                            <InstagramIcon className="w-4 h-4 rounded-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                    <Button
                        className="w-full justify-start text-sm font-normal py-2 gap-2 border border-gray-200 bg-white shadow-sm hover:shadow transition-transform transition-colors dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow-md"
                        variant="outline"
                        onClick={togglePopup}
                    >
                        <MailIcon className="w-4 h-4 mr-2.5" />
                        Contact Us
                    </Button>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    {/* Popup content */}
                    <div className="bg-white p-8 rounded-lg shadow-lg relative">
                        {/* Close Icon */}
                        <button
                            onClick={togglePopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-600 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        {/* Popup Form */}
                        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
    <div className="flex flex-col h-[400px] gap-4 p-6">
        <h3 className="text-xl font-bold">Contact us</h3>
        {/* Form fields */}
        <div className="grid grid-cols-1 gap-4 flex-1">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                        id="first-name"
                        placeholder="Enter your first name"
                        {...register("name")}
                        className={`${errors.name ? 'border-red-500' : ''}`}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                        id="last-name"
                        placeholder="Enter your last name"
                        {...register("lname")}
                        className={`${errors.lname ? 'border-red-500' : ''}`}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    {...register("email")}
                    className={`${errors.email ? 'border-red-500' : ''}`}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    className={`min-h-[90px] resize-none ${errors.message ? 'border-red-500' : ''}`}
                    id="message"
                    placeholder="Enter your message"
                    {...register("message")}
                />
            </div>
        </div>
        {/* Submit button */}
        <div className="flex items-center gap-2">
            <Button className="ml-auto" size="sm" type="submit">
                Send message
            </Button>
        </div>
    </div>
</form>

                    </div>
                </div>
            )}

        </footer>
    );
}

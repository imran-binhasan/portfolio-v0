'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {ArrowRightIcon, MailIcon, MessageSquare, User} from 'lucide-react'


const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
        <div className="relative flex items-center">
            <Input type='name' id='name' placeholder='Name'/>
            <User className="absolute right-6" size={20}/>
        </div>
        <div className="relative flex items-center">
            <Input type='email' id='email' placeholder='Email'/>
            <MailIcon className="absolute right-6" size={20}/>
        </div>
        <div className="relative flex items-center">
            <Textarea type='text' id='text' placeholder='Your Message'/>
            <MessageSquare className="absolute right-6 top-4" size={20}/>
        </div>
        <Button className='flex items-center max-w-44'>
        Let's Talk
        <ArrowRightIcon size={20}/>
        </Button>
    </form>
  )
}

export default Form
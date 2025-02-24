import { SendHorizontal, Mic, Paperclip } from 'lucide-react'
import React from 'react'

const Input = (props) => {
    return (
        <div className="bg-white rounded-lg border-2 border-gray-200 p-3 shadow-sm flex items-center gap-3">
            <Paperclip className="w-5 h-5 text-gray-700" />
            <div className="relative w-full overflow-hidden">
                <span className="absolute whitespace-nowrap animate-scroll text-gray-500">
                    {props.placeholder}
                </span>
                <input
                    type="text"
                    className="w-full bg-transparent outline-none text-gray-700"
                />
            </div>
            <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <Mic className="w-4 h-4 text-white" />
                </button>
                <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <SendHorizontal className="w-4 h-4 text-white" />
                </button>
            </div>
        </div>
    )
}

export default Input

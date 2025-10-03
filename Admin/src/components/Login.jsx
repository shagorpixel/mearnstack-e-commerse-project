import axios from "axios";
import { useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
const defaultData = {
    email:"",
    password:""
}
const Login = ({setToken}) => {
    const [data,setData] = useState(defaultData);
    const changeHandle = (e)=>{
        let name = e.target.name;
        setData(prev=>({
            ...prev,
            [name]:e.target.value
        }))
        console.log(data)
    }
    const onSubmitHandeler = async (e)=>{
        try{
            e.preventDefault()
            const response = await axios.post(`${backendUrl}/api/user/admin`,data);
            if(response.data.success){
                setToken(response.data.token)
            }else{
                console.log(response.data.message)
                toast.error(response.data.message)
            }
        }catch(err){
            console.log(err.message)
            toast.error(err.message)
        }
    }
    return (
        <div className=' flex items-center justify-center min-h-screen w-full'>
            <div className=' bg-white shadow-md rounded-md px-8 py-6 max-w-md'>
                <h1 className=' text-2xl mb-4 font-bold'>Admin Panel</h1>
                <form onSubmit={onSubmitHandeler} >
                    <div className=' mb-3 min-w-72'>
                        <p className=' text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input name="email" value={data.email} onChange={changeHandle} className=' rounded-md w-full px-3 py-2 border border-gray-300 outline-none ' type="email" placeholder='your@email.com' required />
                    </div>
                    <div>
                        <p className=' text-sm font-medium text-gray-700 mb-2'>Your Password</p>
                        <input name="password" value={data.password} onChange={changeHandle} className=' rounded-md w-full px-3 py-2 border border-gray-300 outline-none ' type="password" placeholder='Enter your password' required />
                    </div>
                    <button className=' cursor-pointer mt-2 w-full py-2 px-4 rounded-md text-white bg-black' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
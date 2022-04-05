import { useState, useRef, useEffect } from "react";

const MyComponent = (props) => {

    // const [name, setName] = useState(props.name);

    // const clickHandler = () => {
    //     setName(name.toLowerCase());
    // }

    // State

    const [formData,setFormData] = useState({
        id:'0',
        name:'abc'
    });

    const [isLogin, setIsLogin] = useState('0');

    // useEffect

    useEffect(()=>{
        const checkLogin = localStorage.getItem('isLogin');

        if(checkLogin == '1'){
            setIsLogin('1');
        }
    },[])


    const changeHandle = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    const submitHandle = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(studid.current.value);
        console.log(studname.current.value);
        setIsLogin('1');
        localStorage.setItem('isLogin','1');
    }

    const studid = useRef('');
    const studname = useRef('');

    return (
        <div>
            <form onSubmit={submitHandle}>
                <input type="number" name="id" onChange={changeHandle} ref={studid}/>
                <input type="text" name="name" onChange={changeHandle} ref={studname}/>
                <button type="submit">Submit</button>
            </form>

            {isLogin == '1' ? 'Login' : 'Not Login'}
        </div>
    );
}

export default MyComponent;
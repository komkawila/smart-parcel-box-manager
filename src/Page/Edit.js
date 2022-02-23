import React, { useState, useEffect } from 'react';
import { 
    useHistory,
    useParams
} from "react-router-dom";
import axios from 'axios';
import {api} from '../Constants'
const Edit = () => {
    const [data,setData] = useState([]);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [tel,setTel] = useState("");
    const [waiting,setWaiting] = useState(false);

    const {uid} = useParams();
    console.log(`uid = `); 
    console.log(uid);
    
    useEffect(()=>{
        axios.get(`${api}/api/user/user/id/${uid}`).then((res)=>{
            console.log(`res = `); 
            console.log(res.data.data);
            if(res.data.data.status){
                setName(res.data.data.message.user_name);
                setEmail(res.data.data.message.user_email);
                setTel(res.data.data.message.user_tel);
                setData(res.data.data.message);
                setWaiting(true);
            }
        });
    },[]);
     
    // setData({ ...config_id, config_slope: e.target.value }
    // useEffect(()=>{
    //         console.log(`data = `); 
    //         console.log(data);
    // },[data]);

    if(waiting)
        return ( 
            <section class="section">
                <div class="field">
                    <label class="label">ชื่อ</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="กรุณากรอก ชื่อ-สกุล" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">อีเมล</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="กรุณากรอก อีเมล" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">เบอร์โทรศัพท์</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder="กรุณากรอก เบอร์โทรศัพท์" value={tel} onChange={e => setTel(e.target.value)}/>
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary">Submit</button>
                </div>
            </section>
            
        );
    else {
        return (
            <section class="section">
                <h1>Loading....</h1>
            </section>
        );
    }
}

export default Edit;
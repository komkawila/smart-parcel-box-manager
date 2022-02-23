import React, { useState, useEffect } from 'react';
import { 
    useHistory,
    useParams
} from "react-router-dom";
import axios from 'axios';
import {api} from '../Constants'
import Swal from 'sweetalert2'

const Regis = () => {
  const [data,setData] = useState([]);
    const [waiting,setWaiting] = useState(true);

    const {uid} = useParams();
    console.log(`uid = `); 
    console.log(uid);
    
    // useEffect(()=>{
    //     axios.get(`${api}/api/user/user/id/${uid}`).then((res)=>{
    //         console.log(`res = `); 
    //         console.log(res.data.data);
    //         if(res.data.data.status){
    //             setName(res.data.data.message.user_name);
    //             setEmail(res.data.data.message.user_email);
    //             setTel(res.data.data.message.user_tel);
    //             setData(res.data.data.message);
    //             setWaiting(true);
    //         }
    //     });
    // },[]);
    
    const saveFunc = () => {
        Swal.fire({
            title: 'ยืนยันการบันทึกข้อมูล?',
            text: "ยืนยันการบันทึกข้อมูล",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#008741',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่, บันทึกทันที!'
            }).then((result) => {
            if (result.isConfirmed) {
                console.log(data)
                axios.post(`${api}/api/user/user/add/${data.user_id}`,{
                    user_name : data.user_name,
                    user_tel : data.user_tel,
                    user_email : data.user_email,
                    userid : uid
                }).then((res)=>{
                    console.log(`res = `); 
                    console.log(res.data.data);
                    if(res.data.data.status){
                        Swal.fire({
                            title: 'ยืนยันการบันทึกข้อมูล?',
                            text: "ยืนยันการบันทึกข้อมูล",
                            icon: 'success',
                            confirmButtonColor: '#008741'
                        });
                    }else {
                        Swal.fire({
                            title: 'บันทึกข้อมูลไม่สำเร็จ?',
                            text: "บันทึกข้อมูลไม่สำเร็จ",
                            icon: 'error',
                            confirmButtonColor: '#008741'
                        });
                    }
                });
                
            }
        });
    }
    if(waiting)
        return ( 
            <section class="section">
                <div class="field">
                    <label class="label">LINE ID</label>
                    <div class="control">
                        <input class="input" disable type="text" placeholder="LINE ID" value={uid} />
                    </div>
                </div>
                <div class="field">
                    <label class="label">ชื่อ</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="กรุณากรอก ชื่อ-สกุล" value={data.user_name} onChange={e => setData({ ...data, user_name: e.target.value })}/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">อีเมล</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="กรุณากรอก อีเมล" value={data.user_email} onChange={e => setData({ ...data, user_email: e.target.value })}/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">เบอร์โทรศัพท์</label>
                    <div class="control">
                        <input class="input" type="tel" placeholder="กรุณากรอก เบอร์โทรศัพท์" value={data.user_tel} onChange={e => setData({ ...data, user_tel: e.target.value })}/>
                    </div>
                </div>
                <div class="control">
                    <button class="button is-primary" onClick={saveFunc}>บันทึก</button>
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

export default Regis;
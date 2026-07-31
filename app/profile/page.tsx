"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Profile(){

const [name,setName]=useState("");
const [age,setAge]=useState("");
const [height,setHeight]=useState("");
const [weight,setWeight]=useState("");
const [goal,setGoal]=useState("");
const [injury,setInjury]=useState("");


async function save(){

await supabase
.from("clients")
.insert([
{
name,
age:Number(age),
height:Number(height),
weight:Number(weight),
goal,
injury
}
]);


alert("اطلاعات ثبت شد");

}



return(

<div>

<h1>
اطلاعات بدنی
</h1>


<input 
placeholder="نام"
onChange={(e)=>setName(e.target.value)}
/>


<input 
placeholder="سن"
onChange={(e)=>setAge(e.target.value)}
/>


<input 
placeholder="قد"
onChange={(e)=>setHeight(e.target.value)}
/>


<input 
placeholder="وزن"
onChange={(e)=>setWeight(e.target.value)}
/>


<input 
placeholder="هدف"
onChange={(e)=>setGoal(e.target.value)}
/>


<input 
placeholder="آسیب دیدگی"
onChange={(e)=>setInjury(e.target.value)}
/>


<button onClick={save}>
ارسال اطلاعات
</button>


</div>

)

}

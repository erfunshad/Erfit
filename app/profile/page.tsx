export default function Profile(){

return(

<main
style={{
minHeight:"100vh",
background:"#0a0a0a",
color:"white",
display:"flex",
justifyContent:"center",
padding:"40px"
}}
>

<div
style={{
width:"450px",
background:"#171717",
padding:"30px",
borderRadius:"20px"
}}
>

<h1 style={{
fontSize:"32px"
}}>
اطلاعات بدنی
</h1>


<input placeholder="سن" style={input}/>

<input placeholder="قد (سانتی متر)" style={input}/>

<input placeholder="وزن (کیلوگرم)" style={input}/>


<select style={input}>

<option>
هدف را انتخاب کنید
</option>

<option>
عضله سازی
</option>

<option>
چربی سوزی
</option>

<option>
افزایش وزن
</option>

</select>


<textarea
placeholder="سابقه تمرین یا آسیب دیدگی"
style={{
...input,
height:"100px"
}}
/>


<button
style={{
marginTop:"20px",
width:"100%",
padding:"15px",
borderRadius:"10px",
background:"#22c55e",
color:"white",
border:"none"
}}
>
ارسال اطلاعات
</button>


</div>

</main>

)

}


const input={

width:"100%",
padding:"12px",
marginTop:"15px",
borderRadius:"10px",
background:"#262626",
color:"white",
border:"1px solid #444"

}

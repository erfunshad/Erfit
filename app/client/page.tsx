export default function ClientPanel() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:"#0a0a0a",
        color:"white",
        padding:"40px"
      }}
    >

      <h1 style={{
        fontSize:"40px",
        fontWeight:"bold"
      }}>
        پنل شاگرد Erfit
      </h1>


      <div style={{
        marginTop:"40px",
        display:"grid",
        gap:"20px"
      }}>


        <Box title="برنامه تمرینی">
          برنامه شما هنوز بارگذاری نشده است.
        </Box>


        <Box title="برنامه غذایی">
          برنامه غذایی اختصاصی شما اینجا قرار می‌گیرد.
        </Box>


        <Box title="ثبت پیشرفت">

          وزن امروز:
          <br/>

          <input
            placeholder="مثلا 78"
            style={{
              marginTop:"15px",
              padding:"12px",
              borderRadius:"10px",
              background:"#262626",
              color:"white"
            }}
          />

        </Box>


      </div>


    </main>
  );
}


function Box({
  title,
  children
}:{
  title:string,
  children:React.ReactNode
}){

return(

<div
style={{
background:"#171717",
padding:"25px",
borderRadius:"20px"
}}
>

<h2>
{title}
</h2>

<div style={{
marginTop:"15px",
color:"#aaa"
}}>
{children}
</div>


</div>

)

}

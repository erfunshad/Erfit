export default function TrainerPanel() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        padding: "40px"
      }}
    >

      <h1 style={{
        fontSize:"40px",
        fontWeight:"bold"
      }}>
        پنل مربی Erfit
      </h1>


      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px",
        marginTop:"40px"
      }}>


        <Card 
          title="شاگردان فعال"
          number="0"
        />


        <Card
          title="برنامه‌های آماده"
          number="0"
        />


        <Card
          title="درخواست‌های جدید"
          number="0"
        />


      </div>


      <div style={{
        marginTop:"50px",
        background:"#171717",
        padding:"25px",
        borderRadius:"20px"
      }}>

        <h2>
          آخرین شاگردها
        </h2>

        <p style={{
          marginTop:"20px",
          color:"#aaa"
        }}>
          هنوز شاگردی ثبت نشده است
        </p>


      </div>


    </main>
  );
}



function Card({
  title,
  number
}:{
  title:string,
  number:string
}){

return(

<div style={{
background:"#171717",
padding:"25px",
borderRadius:"20px"
}}>

<h3>
{title}
</h3>

<p style={{
fontSize:"35px",
marginTop:"15px"
}}>
{number}
</p>

</div>

)

}

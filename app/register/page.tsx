export default function Register() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "30px",
          background: "#171717",
          borderRadius: "20px",
        }}
      >

        <h1 style={{
          fontSize: "32px",
          marginBottom: "25px"
        }}>
          ثبت نام Erfit
        </h1>


        <input
          placeholder="نام و نام خانوادگی"
          style={inputStyle}
        />

        <input
          placeholder="شماره موبایل"
          style={inputStyle}
        />

        <input
          placeholder="رمز عبور"
          type="password"
          style={inputStyle}
        />


        <button
          style={{
            width:"100%",
            padding:"15px",
            marginTop:"20px",
            borderRadius:"10px",
            background:"#22c55e",
            color:"white",
            border:"none"
          }}
        >
          ایجاد حساب
        </button>

      </div>
    </main>
  );
}


const inputStyle = {
  width:"100%",
  padding:"12px",
  marginTop:"15px",
  borderRadius:"10px",
  border:"1px solid #444",
  background:"#262626",
  color:"white"
};

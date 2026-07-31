export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }}>

      <div>

        <h1 style={{
          fontSize: "60px",
          fontWeight: "bold"
        }}>
          Erfit
        </h1>

        <p style={{
          fontSize: "24px",
          marginTop: "20px"
        }}>
          برنامه تمرینی و تغذیه اختصاصی با مربی حرفه‌ای
        </p>


        <button style={{
          marginTop: "40px",
          padding: "15px 35px",
          borderRadius: "12px",
          background: "#22c55e",
          color: "white",
          fontSize: "18px",
          border: "none"
        }}>
          شروع همکاری
        </button>

      </div>

    </main>
  );
}

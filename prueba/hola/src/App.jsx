const partidos = [
  {
    equipo1: "🇦🇷 Argentina",
    equipo2: "🇧🇷 Brasil",
    fecha: "15 Junio 2026",
    hora: "20:00 PM",
    estadio: "Estadio Azteca",
  },
  {
    equipo1: "🇫🇷 Francia",
    equipo2: "🏴 Inglaterra",
    fecha: "16 Junio 2026",
    hora: "18:00 PM",
    estadio: "MetLife Stadium",
  },
  {
    equipo1: "🇪🇸 España",
    equipo2: "🇩🇪 Alemania",
    fecha: "17 Junio 2026",
    hora: "21:00 PM",
    estadio: "SoFi Stadium",
  },
  {
    equipo1: "🇺🇾 Uruguay",
    equipo2: "🇵🇹 Portugal",
    fecha: "18 Junio 2026",
    hora: "19:00 PM",
    estadio: "AT&T Stadium",
  },
  {
    equipo1: "🇨🇱 Chile",
    equipo2: "🇲🇽 México",
    fecha: "19 Junio 2026",
    hora: "17:00 PM",
    estadio: "Levi's Stadium",
  },
  {
    equipo1: "🇺🇸 USA",
    equipo2: "🇯🇵 Japón",
    fecha: "20 Junio 2026",
    hora: "20:00 PM",
    estadio: "Lumen Field",
  },
];

export default function App() {

  const agendarPartido = (partido) => {

    const titulo = `${partido.equipo1} vs ${partido.equipo2}`;

    const detalles = "Partido Mundial 2026";

    const location = partido.estadio;

    const inicio = "20260615T200000Z";

    const fin = "20260615T220000Z";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      titulo
    )}&details=${encodeURIComponent(
      detalles
    )}&location=${encodeURIComponent(
      location
    )}&dates=${inicio}/${fin}`;

    window.open(url, "_blank");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #001f3f, #00c853)",
        padding: "40px",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "55px",
          marginBottom: "15px",
        }}
      >
        ⚽ Mundial 2026
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "22px",
          marginBottom: "50px",
          color: "#d9faff",
        }}
      >
        Calendario oficial de partidos
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "25px",
        }}
      >
        {partidos.map((partido, index) => (
          <div
            key={index}
            style={{
              background: "rgba(0,0,0,0.35)",
              padding: "30px",
              borderRadius: "25px",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 20px rgba(0,255,200,0.2)",
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>
              {partido.equipo1} vs {partido.equipo2}
            </h2>

            <p>📅 {partido.fecha}</p>

            <p>⏰ {partido.hora}</p>

            <p>🏟 {partido.estadio}</p>

            <button
              onClick={() => agendarPartido(partido)}
              style={{
                marginTop: "20px",
                padding: "14px 30px",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
                background: "linear-gradient(to right, #00e676, #00b0ff)",
                color: "white",
              }}
            >
              📆 Agendar Partido
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
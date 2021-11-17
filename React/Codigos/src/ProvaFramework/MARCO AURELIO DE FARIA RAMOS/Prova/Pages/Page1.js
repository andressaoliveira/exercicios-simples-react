const Page1 = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "#6A6A6A",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      <div>
        <h1>Início</h1>
        <h3>Escolha seu destino:</h3>
      </div>
      <select
        style={{
          width: "200px",
        }}
      >
        <option>Hawaii</option>
        <option>Japão</option>
        <option>Russia</option>
      </select>
    </div>
  );
};

export default Page1;

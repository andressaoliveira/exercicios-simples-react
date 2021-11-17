function Inicio({DestinoSelected , setDestinoSelected}) {
  return (
    <div className="Inicio">
      Inicio
      <select value={DestinoSelected} onChange={(e)=>setDestinoSelected(e.target.value)}>
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Curitiba">Curitiba</option>
      </select>
    </div>
  );
}

export default Inicio;

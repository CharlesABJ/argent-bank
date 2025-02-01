function Enfant({ dataStart, dataSetEnd }) {
  const handleEnd = () => {
    dataSetEnd("« Bonjour mon grand parent, quoi de neuf ?»");
  };
  return (
    <div className="enfant">
      <h1>Enfant</h1>
      <div>J'ai reçu ceci de mon grand parent: {dataStart}</div>

      <button onClick={handleEnd}>Envoyer</button>
    </div>
  );
}

export default Enfant;

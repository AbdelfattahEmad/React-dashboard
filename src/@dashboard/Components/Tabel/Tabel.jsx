import './Tabel.scss';

const Tabel = ({ children }) => {
  return (
    <div className="Tabel_Container">

      <table className="Tabel">{children}</table>
      
    </div>
  );
};

const tableHead = ({ children }) => {
  return <thead>{children}</thead>;
};

const tableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const tableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

Tabel.tabelHead = tableHead;
Tabel.tabelebody = tableBody;
Tabel.tabelRow = tableRow;

export default Tabel;

import { Component } from "react";

//Creo il mio componente di classe
class Contenitore extends Component {
  render() {

    //This serve per accedere all'istanza
    const { forma, children } = this.props;
    //Const per il css
    const stileWrapper = {
      backgroundColor: forma === "quadrato" ? "#fff" : "#FEFBE8",
      padding: "20px",
      borderRadius: "15px",
      marginTop: "20px",
      transition: "background-color 0.5s ease",
      border: "1px solid #ccc",
      border: forma === "quadrato" ? "3px solid #8E5BF6" : "3px solid #A954F7",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    };

    return <div style={stileWrapper}>{children}</div>;
  }
}

export default Contenitore;
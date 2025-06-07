import { useEffect } from "react";

function PalavraDoDia() {
  const versiculos = [
    {
      texto: "O Senhor é o meu pastor; de nada terei falta.",
      referencia: "Salmos 23:1"
    },
    {
      texto: "Tudo posso naquele que me fortalece.",
      referencia: "Filipenses 4:13"
    },
    {
      texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.",
      referencia: "Salmos 37:5"
    },
    {
      texto: "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor.",
      referencia: "Jeremias 29:11"
    }
  ];

  useEffect(() => {
    const hoje = new Date().getDate(); // usar dia do mês como "semente"
    const index = hoje % versiculos.length;
    const { texto, referencia } = versiculos[index];
    alert(`📖 Palavra do Dia\n\n"${texto}"\n\n${referencia}`);
  }, []);

  return null;
}

export default PalavraDoDia;
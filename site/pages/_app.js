import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const codeblocks = [
    {
      title: "test1",
      tag: ["Violent", "mot"],
      code: "Je vais manger vos morts!"
    },
    {
      title: "Vomit",
      tag: ["cellule", "alcool"],
      code: "Ceci est le code d'un code codé"
    }
    ];

  return <Component {...pageProps} />
}

export default MyApp

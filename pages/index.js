import MainGrid from "./src/components/MainGrid";
import Box from "./src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault } from './src/components/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper}  from './src/components/ProfileRelations';
import React from "react";

function ProfileSideBar(props) {

  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius:"8px" }} />

      <hr/>

      <a className="boxLink" href={`https://github.com/${props.githubUser}`} >
        @{props.githubUser}
      </a>

      <hr/>
      <AlurakutProfileSidebarMenuDefault>


      </AlurakutProfileSidebarMenuDefault>
    </Box>
  )
}


export default function Home() {
  const [comunidades, setComunidades] = React.useState([{
    id: "7543270734572584",
    title: "Eu odeio acordar cedo",
    image:"https://hypescience.com/wp-content/uploads/2018/03/acordando-pela-manha-acordar.jpg"
  }]);
  const githubUser = 'jeffersonf-alves';
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  
  ]

  return (
    <>

    <AlurakutMenu/>
    <MainGrid>
      <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
        <Box>
          <h1 className="title">
            Bem Vindo(a)
          </h1>
         <OrkutNostalgicIconSet/>
        </Box>
        <Box>

          <h2 className="subTitle">O que você deseja fazer? </h2>
          <form onSubmit={function handleCriarComunidade(e) {
            e.preventDefault();
            console.log(e);
            const dadosDoForm = new FormData(e.target);

            const comunidade = {
              id: new Date().toISOString(),
              title: dadosDoForm.get('title'),
              image: dadosDoForm.get('image')

            }

            
            const comunidadesAtualizas = [...comunidades, comunidade];
            setComunidades(comunidadesAtualizas);

          }} onsubmit="alert('Olaa')">
            <div>
                <input 
                  placeholder="Qual vai ser o nome da nossa comunidade?" 
                  name="title" 
                  aria-label="Qual vai ser o nome da nossa comunidade?"
                  type="text"
                  />
                  
            
            </div>
            <div>
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa" /> 
            </div>
            <button>
                Criar Comunidade
            </button>
            </form>
        </Box>

      </div>
      <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>

        <ProfileRelationsBoxWrapper>
        <ul>
            { comunidades.map((itemAtual) =>{
                return (
                  <li key={itemAtual.id}>
                  <a href={`/users/${itemAtual.title}`} key={itemAtual.title} >
                    <img src={itemAtual.image} />
                    <span>{itemAtual.title}</span>
                  </a>
                  </li>
                
                  
                )
            })}
            </ul>
        </ProfileRelationsBoxWrapper>

        <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
        
            <ul>
            {pessoasFavoritas.map((itemAtual) =>{
                return (
                  <li key={itemAtual}>
                  <a href={`/users/${itemAtual}`} key={itemAtual} >
                    <img src={`https://github.com/${itemAtual}.png`} />
                    <span>{itemAtual}</span>
                  </a>
                  </li>
                
                  
                )
            })}
            </ul>
        </ProfileRelationsBoxWrapper>
        <Box>
          Comunidade
        </Box>
      </div>

    </MainGrid>

    </>
  )
}

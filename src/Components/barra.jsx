import { Fragment, useState } from "react";
import styledComponents from "styled-components";
import 'animate.css';

function Barra(){

    const [carga,setCarga] = useState(0);
    const [item,setItem] = useState(0);
    const [classAnimation,setClassAnimation] = useState("animate__animated animate__fadeInDown");
    console.log(item)
    const datos = [

        {
            id:1,
            titulo:"Te gusta los videjuegos"
        },
        {
            id:2,
            titulo:"Te gusta la musica"
        },
        {
            id:3,
            titulo:"Te gusta el deporte"
        },
        {
            id:4,
            titulo:"Te gusta el arte"
        }

    ]

    function Atras(){

        if(carga === 100){
        setCarga(65);
        }else if(carga === 65){
        setCarga(35);
        }else if(carga === 35){
        setCarga(0)
        }

      

        if(item > 0){
        setClassAnimation("animate__animated animate__fadeOutDown");
        setTimeout(()=>{
        setItem(item-1);
        setClassAnimation("animate__animated animate__fadeInDown");
        },1000);
        }

    }

    function Adelante(){

        if(carga === 35){
        setCarga(65);
        }else if(carga === 65){
        setCarga(100);
        }else if(carga ===  100){
        setCarga(100)
        }else{
        setCarga(35)}

        if(item < 3){
        setClassAnimation("animate__animated animate__fadeOutDown");
        setTimeout(()=>{
        setItem(item+1);
        setClassAnimation("animate__animated animate__fadeInDown");
        },1000);
        }
        

        }

    return (


        <Fragment>
        <Container>


        <ul>
            <Loader/>
            <LoaderSu carga={carga}/>
            <Li fondo={carga >= 35}></Li>
            <Li fondo={carga >= 65}></Li>
            <Li fondo={carga >= 95}></Li>
            <Li fondo={carga >= 100}></Li>

        </ul>
       
        </Container>


        <Main>
        <h1 className={classAnimation}>{datos[item].titulo}</h1>
        </Main>

<button onClick={Atras}>atras</button>
<button onClick={Adelante}>adelante</button>
</Fragment>
    );



}


const Container = styledComponents.div`
width:1200px;
padding:20px;
background-color:#FFEEEE;
margin:auto;
margin-top:100px;
border-radius:10px;
@media (max-width:1200px){
width:100%;
}



ul{
width:auto;
display:flex;
justify-content:space-between;
gap:20px;
position:relative;
overflow:hidden;
}
`;



const Li = styledComponents.li`

list-style:none;
display:block;
width:42px;
height:42px;
display:flex;
justify-content:center;
align-items:center;
border-radius:100%;
font-size:18px;
z-index:2;
background-color:${props => props.fondo ? "orange" : "#EDE6DB"};
transition:500ms ease;

`;

const Loader = styledComponents.div`

width:100%;
height:10px;
background-color:#EDE6DB;
position:absolute;
top:15px;

`;

const LoaderSu = styledComponents.div`

width:${props => props.carga && props.carga+"%"};
height:10px;
background-color:orange;
position:absolute;
top:15px;
transition:500ms ease-in;

`;


const Main = styledComponents.section`
padding:30px;
width:500px;
background-color:orange;
border-radius:10px;
margin:auto;
margin-top:50px;
text-align:center;
transition:500ms ease all;

`;

export default Barra;
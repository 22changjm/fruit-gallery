import Images from './Images'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { Modal } from './components/Modal'
import { GlobalStyle } from './globalStyles'

export const media = {
    small: '@media(max-width: 960px)'
}


const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  margin: 40px;
  flex-direction: column;
`
const Header = styled.h1`
  font-family: 'Nunito', sans-serif;
`

const Button = styled.button`
border-radius: 10px;
border: solid;
cursor: pointer;
position: relative;
display: block;
border-width: thick;
&:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
}
`

const Fruit = styled.img`
width: 21em;
height: 21em;
object-fit: cover;
cursor: pointer;
border-radius: 10px;
border: none;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap: 28px;
  max-width: 960px;

  ${media.small} {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    grid-gap: 28px;
    max-width: 960px;
  }
`


function App() {
  const fruitVals = ['apple', 'apricot', 'banana', 'blueberry', 'cherry', 'guava', 'lemon', 'mango', 'orange', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon'];
  const [showModal, setShowModal] = useState(false);
  const [imageID, setImageID] = useState(0);
  const [info, setInfo] = useState({})

  const retrieveData = async () => {
    const response = await fetch(`https://pacific-scrubland-02722.herokuapp.com/https://fruityvice.com/api/fruit/${fruitVals[imageID]}`);
    const data = await response.json();
    setInfo(data);
    setShowModal(prev=> !prev)
  }

  const openModal = (event) => {
      setImageID(parseInt(event.currentTarget.id));
      retrieveData()
    };


  return (
    <>
    <Container>
      <Header>FRUIT GALLERY</Header>
      <Grid>
        <Button id="0" onClick={openModal}> <Fruit src={Images[0]}/></Button> 
        <Button id="1" onClick={openModal}> <Fruit src={Images[1]}/></Button>
        <Button id="2" onClick={openModal}> <Fruit src={Images[2]}/></Button>
        <Button id="3" onClick={openModal}> <Fruit src={Images[3]}/></Button> 
        <Button id="4" onClick={openModal}> <Fruit src={Images[4]}/></Button>
        <Button id="5" onClick={openModal}> <Fruit src={Images[5]}/></Button>
        <Button id="6" onClick={openModal}> <Fruit src={Images[6]}/></Button> 
        <Button id="7" onClick={openModal}> <Fruit src={Images[7]}/></Button>
        <Button id="8" onClick={openModal}> <Fruit src={Images[8]}/></Button>
        <Button id="9" onClick={openModal}> <Fruit src={Images[9]}/></Button> 
        <Button id="10" onClick={openModal}> <Fruit src={Images[10]}/></Button>
        <Button id="11" onClick={openModal}> <Fruit src={Images[11]}/></Button>
        <Button id="12" onClick={openModal}> <Fruit src={Images[12]}/></Button>
        <Button id="13" onClick={openModal}> <Fruit src={Images[13]}/></Button>
        <Button id="14" onClick={openModal}> <Fruit src={Images[14]}/></Button>
      </Grid>
      <Modal showModal={showModal} setShowModal={setShowModal} imageID={imageID} info={info}/>
      <GlobalStyle />
    </Container>
    </>
  );
}

export default App;

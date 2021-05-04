import React from 'react';
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import Images from '../Images'

export const media = {
  small: '@media(max-width: 960px)'
}


const Background = styled.div`
  width: 100%;
  height; 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  align-items: center;
  justify-items: center;
`;

const ModalImg = styled.img`
    width: 20em;
    height: 20em;
    object-fit: cover;
    border-radius: 10px;
    ${media.small} {
      width: 13.5em;
      height: 13.5em;
      object-fit: cover;
      border-radius: 10px;
    }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  h2 {
    text-align: center;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const fruitVals = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry', 'Guava', 'Lemon', 'Mango', 'orange', 'pear', 'pineapple', 'raspberry', 'strawberry', 'tomato', 'watermelon'];

export const Modal = ({showModal, setShowModal, imageID, setImageID, info, setInfo}) => {
    return (
        <>
        {showModal ? (
            <Background>
                <ModalWrapper showModal={showModal}>
                    <ModalImg src={Images[imageID]}/>
                    <ModalContent>
                        <h1>{info.name}</h1>
                        <p>Order: {info.order}</p>
                        <p>Family: {info.family}</p>
                        <p>Genus: {info.genus}</p> 

                        <h2>Nutrition Facts per 100 grams </h2>
                         <ul>
                            <li> {info.nutritions.calories} Calories </li>
                            <li>{info.nutritions.carbohydrates} grams of Carbohydrates </li>
                            <li>{info.nutritions.protein} grams of Protein </li>
                            <li> {info.nutritions.fat} grams of Fat </li>
                            <li> {info.nutritions.sugar} grams of Sugar </li>
                        </ul> 
                        
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal (prev => !prev)} />
                </ModalWrapper> 
            </Background>
        ) : null}
        </>
      )
};

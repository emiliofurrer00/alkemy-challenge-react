import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import App from '../../App';
import parse from 'html-react-parser';
import './RecipeDetails.css';

const modalStyles = {
  content: {
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    zIndex: '10000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
};

function RecipeDetails({recipe, isOpen, setIsOpen}) {
  let subtitle;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
      <Modal
        ariaHideApp={false}
        isOpen
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Recipe details modal"
        id='recipe-details-modal'
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{recipe.title}</h2>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img className="recipe-details-img" src={recipe.image} />
            <ul style={{display: 'flex', flexDirection: 'column'}}>
                <li>Diary Free: {recipe.diaryFree ? 'Yes' : 'No'}</li>
                <li>Gluten Free: {recipe.glutenFree ? 'Yes' : 'No'}</li>
                <li>Vegan: {recipe.vegan ? 'Yes' : 'No'}</li>
                <li>Vegetarian: {recipe.vegetarian ? 'Yes' : 'No'}</li>
                <li>Health Score: {recipe.healthScore}</li>
                <li>Price per serving: ${recipe.pricePerServing}</li>
                <li>Ready in {recipe.readyInMinutes} minutes</li>
            </ul>        
        </div>
        <button className="close-modal-btn" onClick={closeModal}>X</button>
      </Modal>
  );
}

export default RecipeDetails
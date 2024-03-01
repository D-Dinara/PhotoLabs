import { useReducer, useEffect } from 'react';

// Define the initial state of the application
const initialState = {
  photoData: [],
  topicData: [],
  activeTopic: null,
  favPhotos: [],
  displayModal: {
    showModal: false,
    photoDetails: {}
  }
};

// Define action types for updating favorite photos and toggling the modal
const ACTIONS = {
  UPDATE_FAV_PHOTOS: 'UPDATE_FAV_PHOTOS',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_TOPIC: 'SET_TOPIC',
};

// Reducer function to handle state updates based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FAV_PHOTOS:
       // Update favorite photos based on the dispatched action
      if (!state.favPhotos.includes(action.payload)) {
        return { ...state, favPhotos: [...state.favPhotos, action.payload] };
      } else {
        return { ...state, favPhotos: state.favPhotos.filter(id => id !== action.payload) };
      }
    case ACTIONS.TOGGLE_MODAL:
      // Toggle modal display based on the dispatched action
      return {
        ...state,
        displayModal: {
          showModal: action.payload.showModal,
          photoDetails: action.payload.photoDetails
        }
      };
      case ACTIONS.SET_PHOTO_DATA:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC_DATA:
        return { ...state, topicData: action.payload };
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return { ...state, photoData: action.payload };
      case ACTIONS.SET_TOPIC:
        return { ...state, activeTopic: action.payload };
    default:
       // Throw an error for unsupported action types
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const useApplicationData = () => {
   // Initialize state and dispatch function using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Render photos and topics on load
  useEffect(() => {
    Promise.all([
      fetch('/api/photos').then(response => response.json()),
      fetch('/api/topics').then(response => response.json())
    ])
    .then(([photoData, topicData]) => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  // Track the topic change and render relevant photos
  useEffect(() => {
    if(state.activeTopic) {
      fetch(`/api/topics/photos/${state.activeTopic}`).then(response => response.json())
      .then((photoData) => {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: photoData });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      fetch('/api/photos').then(response => response.json())
      .then((photoData) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [state.activeTopic]);
  

  /**
 * Toggles the favorite status of a photo.
 * 
 * @param {*} photoId - The ID of the photo to toggle the favorite status.
 */
  const updateFavPhotos = (photoId) => {
    dispatch({ type: ACTIONS.UPDATE_FAV_PHOTOS, payload: photoId });
  };

  /**
 * Toggles the modal display.
 * 
 * @param {boolean} showModal - Indicates whether the modal should be displayed or hidden.
 * @param {object} photoDetails - Details of the photo to be displayed in the modal.
 */
  const toggleModal = (showModal, photoDetails) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL, payload: { showModal, photoDetails } });
  };

 

  /**
 * Sets topic to render vrelevant photos 
 * 
 * @param {*} topicId - The ID of the photo to toggle the favorite status.
 */
  const getPhotosByTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_TOPIC, payload: topicId })
  }

  // Sets topic to null to render all photos
  const getAllPhotos = () => {
    dispatch({ type: ACTIONS.SET_TOPIC, payload: null })
  }

  return {
    state,
    updateFavPhotos,
    toggleModal,
    getPhotosByTopic,
    getAllPhotos
  };
};

export default useApplicationData;
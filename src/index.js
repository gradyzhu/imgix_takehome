import _ from 'lodash';
import { 
  handleTextInput, handleHexInput, handleTextSubmit, 
  handleHexSubmit, textInput, textForm, hexForm, hexInput,
  blendOptions, handleOptions, handleTextOpacity, textOpacitySlider
} from './handlers.js';

document.addEventListener("DOMContentLoaded", () => {
  textForm.addEventListener('submit', handleTextSubmit);
  hexForm.addEventListener('submit', handleHexSubmit);
  textInput.addEventListener('change', handleTextInput);
  hexInput.addEventListener('change', handleHexInput);
  blendOptions.addEventListener('change', handleOptions);
  textOpacitySlider.addEventListener('change', handleTextOpacity);
});
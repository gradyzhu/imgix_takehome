import _ from 'lodash';
import { 
  handleTextInput, handleHexInput, 
  handleHexSubmit, textInput, hexForm, hexInput,
  blendOptions, handleOptions, handleTextOpacity, textOpacitySlider
} from './handlers.js';

document.addEventListener("DOMContentLoaded", () => {
  hexForm.addEventListener('submit', handleHexSubmit);
  textInput.addEventListener('input', handleTextInput);
  hexInput.addEventListener('change', handleHexInput);
  blendOptions.addEventListener('change', handleOptions);
  textOpacitySlider.addEventListener('change', handleTextOpacity);
});
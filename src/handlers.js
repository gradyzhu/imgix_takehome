
export const textForm = document.getElementById('text-form');
export const textInput = document.getElementById('text-input');
export const hexForm = document.getElementById('hex-form');
export const hexInput = document.getElementById('hex-input');
export const text = document.getElementById('image-text');
export const container = document.getElementById('img-container');
export const image = document.getElementById('image');
export const blendOptions = document.getElementById('blend-mode');
export const blendOptionsHeader = document.getElementById('blend-options-header');
export const hexError = document.getElementById('hex-error');
export const imageText = document.getElementById('image-text');
export const textOpacitySlider = document.getElementById('text-opacity');

const HEXCHARS = /^#[0-9A-F]{6}$/;
let textValue = "default text";
let hexValue = "#";

// set default values

image.src = "https://assets.imgix.net/unsplash/bridge.jpg";
textInput.value = "default text";
text.innerHTML = textValue;
textOpacitySlider.value = 100;

// handle blend options

export const handleOptions = (e) => {
  let index = e.currentTarget.selectedIndex;

  switch (index) {
    case 0:
      image.style.mixBlendMode = "none";
      break;
    case 1:
      image.style.mixBlendMode = "overlay";
      break;
    case 2:
      image.style.mixBlendMode = "multiply";
      break;
    case 3:
      image.style.mixBlendMode = "darken";
      break;
    case 4:
      image.style.mixBlendMode = "soft-light";
      break;
    case 5:
      image.style.mixBlendMode = "hard-light";
      break;
    default:
      break;
  }
};

// handle text

export const handleTextInput = (e) => {
  textValue = e.currentTarget.value;
};

export const handleTextSubmit = (e) => {
  e.preventDefault();
  text.innerHTML = textValue;
  textInput.value = "";
};

export const handleTextOpacity = (e) => {
  let value = e.currentTarget.value ;
  imageText.style.opacity = Number(value) * (0.01);
};

// handle hex

const renderHexError = () => {
  hexError.style.opacity = 1;
};

const clearHexError  = () => {
  hexError.style.opacity = 0;
};

const isValidHex = (hexCode) => {
  return HEXCHARS.test(hexCode);
};

export const handleHexInput = (e) => {
  let value = e.currentTarget.value;
  if (!value.length) {
    e.currentTarget.value = "#";
  } 
  else if (value[0] !== "#"){
    e.currentTarget.value = "#" + value;
    hexValue = e.currentTarget.value;
  } else {
    hexValue = value;
    clearHexError();
  }
};

export const handleHexSubmit = (e) => {
  e.preventDefault();
  if (isValidHex(hexValue)) {
    container.style.backgroundColor = hexValue;
    hexValue = "#";
  } else {
    hexValue = "#";
    renderHexError();
  }
};


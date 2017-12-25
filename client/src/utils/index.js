import cardFallbackImg from '../assets/images/bombardier_cseries.jpeg';
import avatarFallbackImg from '../assets/images/rnm_floatinghead.jpg';

export const addDefaultCardImg = (event) => {
  event.target.src = cardFallbackImg;
}

export const addDefaultAvatar = (event) => {
  event.target.src = avatarFallbackImg;
}

export const shareTweet = (pin) => {
  let url = "https://twitter.com/intent/tweet?hashtags=pinflight"
  pin.tags.forEach(tag => {
    url += `,${tag}`;
  });
  url += "&related=freecodecamp&text=";
  url += pin.title;
  window.open(url);
}

export const copyUrl = (pin) => {
  const text = `${window.location.origin}/pins/${pin._id}`;
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

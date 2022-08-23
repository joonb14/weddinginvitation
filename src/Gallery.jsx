import ImageGallery from 'react-image-gallery';
import "./assets/styleForGallery.css";

//import sample1 from "./assets/img/sample1.png";
import sample2 from "./assets/img/sample2.png";
import sample3 from "./assets/img/sample3.png";
import sample4 from "./assets/img/sample4.png";
import sample5 from "./assets/img/sample5.png";
import sample6 from "./assets/img/sample6.png";
 
const images = [
  {
    original: sample6,
    thumbnail: sample6,
  },
  {
    original: sample2,
    thumbnail: sample2,
  },{
    original: sample3,
    thumbnail: sample3,
  },{
    original: sample4,
    thumbnail: sample4,
  },{
    original: sample5,
    thumbnail: sample5,
  },
];
 
function Gallery() {
    return (
      <ImageGallery items={images} />
    )
}

export default Gallery;
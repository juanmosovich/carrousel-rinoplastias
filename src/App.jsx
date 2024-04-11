import { useState } from 'react'
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"





import car1 from "./img/img1.webp"
import car2 from "./img/img2.webp"
import car3 from "./img/img3.webp"
import car4 from "./img/img4.webp"
import car5 from "./img/img5.webp"
import car6 from "./img/img6.webp"
import car7 from "./img/img7.webp"
import car8 from "./img/img8.webp"
import car9 from "./img/img9.webp"
import car10 from "./img/img10.webp"
import car11 from "./img/img11.webp"
import car12 from "./img/img12.webp"
import car13 from "./img/img13.webp"
import car14 from "./img/img14.webp"
import car15 from "./img/img15.webp"
import car17 from "./img/img17.webp"
import car19 from "./img/img19.webp"
import car20 from "./img/img20.webp"
import car21 from "./img/img21.webp"
import car22 from "./img/img22.webp"
import car23 from "./img/img23.webp"
import car24 from "./img/img24.webp"
import car25 from "./img/img25.webp"
import car26 from "./img/img26.webp"
import car27 from "./img/img27.webp"
import car28 from "./img/img28.webp"
import car29 from "./img/img29.webp"
import car30 from "./img/img30.webp"
import car31 from "./img/img31.webp"
import car32 from "./img/img32.webp"
import car33 from "./img/img33.webp"
import car34 from "./img/img34.webp"
import car35 from "./img/img35.webp"
import car36 from "./img/img36.webp"
import car37 from "./img/img37.webp"
import car38 from "./img/img38.webp"
import car39 from "./img/img39.webp"
import car40 from "./img/img40.webp"
import car41 from "./img/img41.webp"
import car42 from "./img/img42.webp"
import car43 from "./img/img43.webp"
import car44 from "./img/img44.webp"
import car45 from "./img/img45.webp"
import car46 from "./img/img46.webp"
import car47 from "./img/img47.webp"
import car48 from "./img/img48.webp"
import car49 from "./img/img49.webp"
import car50 from "./img/img50.webp"
import car51 from "./img/img51.webp"
import car52 from "./img/img52.webp"
import car53 from "./img/img53.webp"
import car54 from "./img/img54.webp"
import car55 from "./img/img55.webp"
import car56 from "./img/img56.webp"
import car57 from "./img/img57.webp"





const images = [ 
  { 
    original: car1,
    thumbnail: car1
  },
  { 
    original: car2,
    thumbnail: car2
  }, 
  { 
    original: car3,
    thumbnail: car3
  }, 
  { 
    original: car4,
    thumbnail: car4
  },
  { 
    original: car5,
    thumbnail: car5
  }, 
  { 
    original: car6,
    thumbnail: car6
  },
  { 
    original: car7,
    thumbnail: car7
  }, 
  { 
    original: car8,
    thumbnail: car8
  }, 
  { 
    original: car9,
    thumbnail: car9
  },
  { 
    original: car10,
    thumbnail: car10
  },
  { 
    original: car12,
    thumbnail: car12
  }, 
  { 
    original: car13,
    thumbnail: car13
  }, 
  { 
    original: car14,
    thumbnail: car14
  },
  { 
    original: car15,
    thumbnail: car15
  }, 
  { 
    original: car11,
    thumbnail: car11
  },
  { 
    original: car17,
    thumbnail: car17
  }, 
  { 
    original: car19,
    thumbnail: car19
  },
  { 
    original: car20,
    thumbnail: car20
                      
  },
  { 
    original: car21,
    thumbnail: car21
  },
  
  { 
    original: car23,
    thumbnail: car23
  }, 
  { 
    original: car24,
    thumbnail: car24
  },
  { 
    original: car25,
    thumbnail: car25
  }, 
  { 
    original: car26,
    thumbnail: car26
  },
  { 
    original: car27,
    thumbnail: car27
  }, 
  
  { 
    original: car22,
    thumbnail: car22
  }, 
  { 
    original: car29,
    thumbnail: car29
  },
  { 
    original: car30,
    thumbnail: car30
  },
  { 
    original: car31,
    thumbnail: car31
  },
  { 
    original: car32,
    thumbnail: car32
  }, 
  { 
    original: car33,
    thumbnail: car33
  }, 
  { 
    original: car28,
    thumbnail: car28
  }, 
  { 
    original: car35,
    thumbnail: car35
  }, 
  { 
    original: car36,
    thumbnail: car36
  },
  { 
    original: car37,
    thumbnail: car37
  }, 
  { 
    original: car38,
    thumbnail: car38
  }, 
  { 
    original: car39,
    thumbnail: car39
  },
  { 
    original: car34,
    thumbnail: car34
    
  },
  { 
    original: car41,
    thumbnail: car41
  },
  { 
    original: car42,
    thumbnail: car42
  }, 
  { 
    original: car43,
    thumbnail: car43
  }, 
  { 
    original: car44,
    thumbnail: car44
  },
  { 
    original: car45,
    thumbnail: car45
  }, 
  { 
    original: car40,
    thumbnail: car40
  },
   { 
    original: car47,
    thumbnail: car47
  }, 
  { 
    original: car48,
    thumbnail: car48
  }, 
  { 
    original: car49,
    thumbnail: car49
  },
  { 
    original: car50,
    thumbnail: car50
  },
  { 
    original: car51,
    thumbnail: car51
  },
  { 
    original: car46,
    thumbnail: car46
  },
 
  { 
    original: car53,
    thumbnail: car53
  }, 
  { 
    original: car54,
    thumbnail: car54
  },
  { 
    original: car55,
    thumbnail: car55
  }, 
  { 
    original: car56,
    thumbnail: car56
  },
  { 
    original: car57,
    thumbnail: car57
  }, 
 { 
    original: car52,
    thumbnail: car52
  }
]
 


function App() {
  

  return (
    <>
    <div style={{width : "70vw", margin: "auto"}}> 
    
            <a target='_blank' rel='noopener noreferrer' href='https://otorrinoenpilar.com/temas/rinoplastia.html'> <h3 style={{color: "white", textAlign: "center"}}>❌CERRAR</h3></a>
   
      <ImageGallery items={images} />

    </div>   
    </>
  )
}

export default App

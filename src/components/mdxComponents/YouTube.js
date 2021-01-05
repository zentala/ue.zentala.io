import * as React from 'react';

const YouTube = (props) => {
  if (props.id) {
    const url = `https://www.youtube.com/embed/${props.id}`
    if(props.start) url+= `?start=${props.start}`

    return (
      <div class="videoWrapper">
        <iframe 
          width="560" 
          height="315" 
          src={url}
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    );
  } else {
    return null;
  }
};

export default YouTube;

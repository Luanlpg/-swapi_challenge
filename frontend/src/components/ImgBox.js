import React from 'react';
import Image from 'material-ui-image'


export default function ImgCard(props) {
  return (
    <div>
      <Image
        src={props.item.front_default}
        title={props.item.display_name}
      />
    </div>
  )
}

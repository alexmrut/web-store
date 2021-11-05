import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

//function component

//with large data - performance issue => will deal with this later
// idx = index filtered to display only 4 items in section
const CollectionPreview = ({title, items})=>(
    <div className='collection-preview'>

        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
            .filter((item,idx)=>idx<4)
            .map(({id,...itemProps})=>(
                <CollectionItem key={id} {...itemProps}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview;
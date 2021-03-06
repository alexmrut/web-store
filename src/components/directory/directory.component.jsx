import React from "react";
import './directory.styles.scss';
import MenuItem from "../menu-item/menu-item.component";
import { Component } from "react";

//we need class component because we are going to store the state value

class Directory extends Component{
    //always need constructor
    constructor(){
        super();

        this.state={
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats',
                    size:'small'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets',
                    size:'small'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers',
                    size:'small'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens',
                   
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens',
                   
                }
            ]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...sectionProps})=>(
                        <MenuItem key ={id} {...sectionProps}></MenuItem>
                    ))
                }
                
            </div>
        )
    }
}

export default Directory;
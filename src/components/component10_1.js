import styled from 'styled-components';
import React from 'react';
import bannerImg from "../img/227_5.jpg";

const Component10_1 = (props) => {
    return (
    <div style={{width:'100%',display: 'flex',justifyContent: 'center', margin:'75px auto'}}>
        <div>
            <img style={{width:'350px'}} src={bannerImg}></img>
        </div>
        <div style={{margin: 'auto 0', marginLeft:'200px'}}>
            <p style={{fontWeight:'bold', fontSize:'30px', margin:'0px 0px 10px 0px'}}>{props.head}</p>
            <span style={{fontWeight:'lighter'}}>{props.contents.map((content)=><>{content}<br/></>)}</span>
        </div>

    </div>
    );
}

export default Component10_1
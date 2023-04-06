import styled from 'styled-components';
import React from 'react';
import bannerImg from "../img/227_5.jpg";

const Component10 = (props) => {
    let reverse = props.reverse
    if (reverse === undefined) {
        reverse = false
    }
    const Img = () => <img style={{ width: '550px' }} src={bannerImg}></img>
    const Content = () => <div style={{ margin: 'auto 0', marginLeft: reverse ? '0px' : '330px', marginRight: reverse ? '330px' : '0px' }}>
        <p style={{ fontWeight: 'bold', fontSize: '37px', margin: '0px 0px 10px 0px' }}>{props.head}</p>
        <p style={{ fontWeight: 'lighter', lineHeight: '30px', fontSize: '19px' }}>{props.contents.map((content) => <>{content}<br /></>)}</p>
    </div>
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '75px auto' }}>
            {reverse ? <><Content /><Img /></> : <><Img /><Content /></>}
        </div>
    );
}

export default Component10
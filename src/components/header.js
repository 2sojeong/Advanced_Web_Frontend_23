import { Link, useLocation } from "react-router-dom";
import bannerImg from "../img/227_5.jpg";
import React, { useState, useEffect, useMemo } from "react";
import { throttle } from 'lodash'

const Header = () => {
    const [scrollevent, setScrollevent] = useState(false);
    const onScrollFn = useMemo(() => throttle(() => {
        if (window.scrollY > 20) {
            setScrollevent(true);
        } else {
            setScrollevent(false);
        }
    }, 100), []);

    useEffect(() => {
        window.addEventListener('scroll', onScrollFn);
        return () => {
            window.removeEventListener('scroll', onScrollFn);
        }
    }, []);
    const location = useLocation();
    const color = scrollevent ? '000' : location['pathname'] === '/' ? 'FFF' : '000';
    const a = { cursor: 'pointer', textDecoration: 'none' }

    const Li = (props) => {
        return <li style={{ display: 'inline-block' }}>
            <Link style={{ ...a, display: 'block', height: '100%', color: '#' + color, textTransform: 'uppercase', padding: '0 36px', margin: '0', transition: '10s' }} to={{ pathname: '/' + props.src }}>
                {props.children}
            </Link>
        </li >
    }
    return <>
        {location['pathname'] !== '/' && <div style={{ height: '132px' }}></div>}
        <div style={{ width: '100%', position: 'fixed', 'top': 0, 'left': 0, 'borderBottom': `1px solid ${scrollevent ? '#ddd' : 'transparent'}`, background: `${scrollevent ? '#fff' : 'transparent'}`, 'zIndex': 99999, transition: '.3s' }}>
            <div style={{ height: `${scrollevent ? '90px' : '132px'}`, display: 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', maxWidth: '1390px', width: '100%', padding: '0 20px', boxSizing: 'border-box', position: 'relative', margin: '0 auto', transition: '.3s' }}>
                <h1 style={{ width: '185px', height: '72px', position: 'relative' }}>
                    <Link style={{ display: 'block', width: '100%', height: '100%' }} to={{ pathname: '/' }}>
                        <img style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: '0' }} src={bannerImg}></img>
                    </Link>
                </h1>
                <ul style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', listStyle: 'none', padding: '0' }}>
                    <Li src="tag">company</Li>
                    <Li src="info1">r&d/product</Li>
                    <Li src="info2">ir/news</Li>
                    <Li src='info2'>career</Li>
                </ul>
                <div style={{
                    width: '250px', display: 'flex', alignItems: 'center', color: '#' + color, padding: '0'
                }}>
                    Gachon University
                </div>
            </div >
        </div ></>
}

export default Header;
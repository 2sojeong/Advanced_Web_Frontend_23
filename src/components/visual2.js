import Img1 from "../img/Biotechnology-Salaries.jpg";
import Img2 from '../img/Healthcare_22.jpg'
import { HashLink } from "react-router-hash-link";
import { scrollWithOffset } from '../utils/util';
const Visual2 = () => {
    const Li = (props) => <li style={{ display: 'inline-block', listStyle: 'none', padding: '0', margin: '0' }}>
        <HashLink smooth to={'/' + props.to + '/#' + props.section} scroll={el => scrollWithOffset(el)}
            style={{ zIndex: '99999', position: 'relative', display: 'block', width: '300px', height: '64px', margin: '6px 6px', padding: '0 20px', border: '1px solid rgba(255, 255, 255, 0.5)', fontSize: '20px', color: '#fff', textAlign: 'left', lineHeight: '62px', textDecoration: 'none', fontWeight: 'bold' }}>
            {props.children}
            <div style={{ position: 'absolute', right: '16px', top: '47%', width: '21px', height: '15px', marginTop: '-7px', background: 'url(https://mis-prod-koce-skhynixhomepage-cdn-01-ep.azureedge.net/img/common/ico_more_w02.png) no-repeat 0 0 / contain' }} />
        </HashLink>
    </li >
    return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)' }}>
        <div style={{ background: `url(${Img1}) no-repeat center`, backgroundSize: 'cover', height: '800px', position: 'relative', border: '32px solid #fff', borderRightWidth: '16px', zIndex: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: '#000', opacity: '0.6', zIndex: '-1' }}></div>
            <div style={{ textAlign: 'center', zIndex: '10' }}>
                <h2 style={{ fontSize: '90px', fontWeight: 'bold', color: '#fff', margin: '0' }}>TECH</h2>
                <p style={{ color: '#fff', opacity: '0.8', fontSize: '21px', lineHeight: '30px', margin: '0 0 60px 0' }}>Biotechnology and products that help improve<br />our lives and the health of our planet.</p>
                <ul style={{ maxWidth: '464px', position: 'relative', margin: '0 auto', textAlign: 'center', padding: '0' }}>
                    <Li to='info2' section='section1'>What is?</Li>
                    <Li to='info2' section='section2'>Tech Influence</Li>
                    <Li to='info2' section='section3'>Tech Company</Li>
                </ul>
            </div>
        </div>
        <div style={{ background: `url(${Img2}) no-repeat center`, backgroundSize: 'cover', height: '800px', position: 'relative', border: '32px solid #fff', borderLeftWidth: '16px', zIndex: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: '#000', opacity: '0.6', zIndex: '-1' }}></div>
            <div style={{ textAlign: 'center', zIndex: '10' }}>
                <h2 style={{ fontSize: '90px', fontWeight: 'bold', color: '#fff', margin: '0' }}>CARE</h2>
                <p style={{ color: '#fff', opacity: '0.8', fontSize: '21px', lineHeight: '30px', margin: '0 0 60px 0' }}>Health care provides to individuals or communities<br />in order to maintain and improve their health.</p>
                <ul style={{ maxWidth: '464px', position: 'relative', margin: '0 auto', textAlign: 'center', padding: '0' }}>
                    <Li to='info3' section='section1'>Services</Li>
                    <Li to='info3' section='section2'>Trends</Li>
                    <Li to='info3' section='section3'>New-Tech</Li>
                </ul>
            </div>
        </div>
    </div >
}

export default Visual2
import { Link } from "react-router-dom";
import bannerImg from "../img/227_5.jpg";

const common = { margin: '0', padding: '0', border: '0', lineHeight: '155%', letterSpacing: 'normal', listStyle: 'none' }
const a = { cursor: 'pointer', textDecoration: 'none' }

const Li = (props) => {
    return <li style={{ ...common, height: '100%', position: 'relative' }}>
        <Link style={{ ...a, ...common, display: 'block', height: '100%', color: '#000', textTransform: 'uppercase', padding: '0 36px', lineHeight: '132px', }} to={{ pathname: '/' + props.src }}>
            {props.children}
        </Link>
    </li>
}

const Header = () => {
    return <div style={{ width: '100%', position: 'fixed', 'top': 0, 'left': 0, 'borderBottom': '1px solid transparent', 'zIndex': 99999 }}>
        <div style={{ height: '132px', display: 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', maxWidth: '1390px', width: '100%', padding: '0 20px', boxSizing: 'border-box', position: 'relative', margin: '0 auto' }}>
            <h1 style={{ ...common, width: '185px', height: '72px', position: 'relative' }}>
                <Link style={{ display: 'block', width: '100%', height: '100%' }} to={{ pathname: '/' }}>
                    <img style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: '0' }} src={bannerImg}></img>
                </Link>
            </h1>
            <ul style={{ ...common, position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Li src="tag">company</Li>
                <Li src="info1">r&d/product</Li>
                <Li src="info2">ir/news</Li>
                <Li src='info2'>career</Li>
            </ul>
            <div style={{ ...common, width: '250px', display: 'flex', alignItems: 'center' }}>
                Gachon University
            </div>
        </div>
    </div >
}

export default Header;
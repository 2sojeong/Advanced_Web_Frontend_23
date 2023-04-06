import Header from "../components/header"
import Footer from '../components/footer';
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
import Component4 from "../components/component4";
import Component5 from "../components/component5";
import Component6 from "../components/component6";
import Component7 from "../components/component7";
import Component8 from "../components/component8";
import Component10 from "../components/component10";
const MarketPage = () =>
    <>
        <Header />
        <Component1 title1='FEATURED SERVICES' contents={['네이버는 기술 플랫폼으로서 첨단 기술을 누구나 쉽게 활용할 수 있는 일상의 친숙한 서비스로 제공하기 위해','변화를 추구하고, 이용자와 호흡하며 항상 새로운 도전을 시도합니다.']}/>
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
        <Component8 />
        <Component10 head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Component10 reverse={true} head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Footer />
    </>


export default MarketPage
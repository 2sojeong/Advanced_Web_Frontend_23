import Header from '../components/header';
import Footer from '../components/footer';
import Component5 from '../components/component5';
import Component10_1 from '../components/component10_1';
import Component10_2 from '../components/component10_2';
const InfoPage3 = () => {
    return <>
        <Header />
        {/* <Component5 /> */}
        <Component10_1 head='한 차원 높은 성능' contents = {['프리미엄 기능과 원하는 방식으로 커스터마이징','할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']}/>
        <Component10_2 head='한 차원 높은 성능' contents = {['프리미엄 기능과 원하는 방식으로 커스터마이징','할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']}/>
        <Footer />
    </>
}

export default InfoPage3
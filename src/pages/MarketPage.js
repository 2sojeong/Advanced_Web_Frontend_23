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
const com6Data = { imgheader: 'Public / Private / HDC', imgurl: "https://kakaoenterprise.com/wp-content/uploads/2022/10/pasted_image_at_2022-09-19T01_51_25.901Z-1-e1666245998166.png", textheader: '여러 형태의 클라우드 제공', textcontent: ['고객 요구사항에 적합한 여러 형태의 클라우드를 안정적으로', '지원하며, 합리적인 가격으로 신뢰성이 검증된 고성능의 ', '클라우드 인프라를 제공합니다.', '', '*HDC - Hybrid Data Center'], imgheader2: 'Installable', imgurl2: 'https://kakaoenterprise.com/wp-content/uploads/2023/01/0118보도자료섬네일.png', textheader2: '스탠다드 / 엔터프라이즈 / ML 타입', textcontent2: ['물리적으로 독립된 구조로 고객사 온프레미스 환경에', '퍼블릭 클라우드의 사용자 경험과 고가용성 서비스 등 ', '맞춤형 서비스를 제공합니다.'], moreurl: 'https://pages.kakaoenterprise.com/rs/714-QAI-126/images/Kakao i Cloud Installable.pdf' }

const MarketPage = () =>
    <>
        <Header />
        <Component1 />
        <Component2 head='채용' contents={[' 함께 지식을 쌓고', '성장합니다.']} imgurl="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/th-build-your-knowledge-pc-res2.png?$ORIGIN_PNG$" />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 data={com6Data} />
        <Component7 />
        <Component8 />
        <Component10 head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Component10 reverse={true} head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Footer />
    </>


export default MarketPage
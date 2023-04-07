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
        <Component1 />
        <Component2 />
        <Component3 head='커피이야기' content1='내 취향이 담긴 커피,' content2='투썸플레이스에는' content3='내 취향을 담아 섬세하게 만든' content4='나만의 커피가 있습니다.' content5='투썸플레이스 큐그레이더(Q-Grader)는 좋은 산지의 신선한 원두만을 선별해 각각 다른 개성의 세가지 블렌드를 제공합니다. 원두 타입별 최적의 밸런스를 맞춘 로스팅 포인트, 최상의 에스프레소 추출 기술이 더해져 투썸플레이스만의 커피가 완성됩니다.' img="https://www.twosome.co.kr/resources/images/content/img_p_coffeestory.jpg" />
        <Component4 head='카카오i클라우드' title='기업용 통합 클라우드 플랫폼' content1='다양한 기술, 플랫폼, 서비스를 안정적으로 연결하여 신뢰할 수 있는 클라우드입니다.
                                검증된 고성능 클라우드를 합리적인 가격으로 제공하고 성능, 보안,
                                확장성, AI 등 클라우드 모든 영역을 아우르는 남다른 기술력으로
                                고객의 디지털 전환을 돕습니다.' content2='자세히 보기' link="https://kakaoicloud.com/" image1='https://kakaoenterprise.com/wp-content/uploads/2022/04/intro-cloud-2.jpg' image2='https://kakaoenterprise.com/wp-content/uploads/2022/04/intro-cloud-ch.png' />
        <Component5 content1='우리는 꿈을 현실로 만드는 여정에 함께하는 동반자들이다.' content2='우리는 사람들이 자신의 꿈을 실현하는 것을 도움으로써' content3='더 나은 세상을 만드는데 기여한다.' content4='기술과 서비스,' content5='그리고 혁신적인 아이디어로 우리 모두의 꿈을 현실로 만듭니다.' img='https://kakaoenterprise.com/wp-content/themes/kakaoenterprise/images/sub/info/about-intro-poster.jpg?v1.1' />
        <Component6 />
        <Component7 title='Microsoft Teams의 다양한 기능' content='연결 상태를 유지하고 언제든지 공유 콘텐츠에 액세스하여 함께 학습하고 계획하며 혁신하세요.'
            bar1='가정' bar2='비즈니스' bar3='엔터프라이즈' bar4='교육'
            link1='https://www.microsoft.com/ko-kr/microsoft-teams/teams-for-home'
            link2="https://www.microsoft.com/ko-kr/microsoft-teams/free"
            link3="https://www.microsoft.com/ko-kr/microsoft-teams/teams-for-work"
            link4="https://www.microsoft.com/ko-kr/microsoft-teams/education"
            img1='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Image-Home-400x400?resMode=sharp2&amp;op_usm=1.5,0.65,15,0&amp;qlt=75&amp;wid=400&amp;hei=400'
            img2='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Image-Business-400x400?resMode=sharp2&amp;op_usm=1.5,0.65,15,0&amp;qlt=75&amp;wid=400&amp;hei=400'
            img3="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Image-Enterprise-400x400?resMode=sharp2&amp;op_usm=1.5,0.65,15,0&amp;qlt=75&amp;wid=400&amp;hei=400"
            img4="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Image-Education-400x400?resMode=sharp2&amp;op_usm=1.5,0.65,15,0&amp;qlt=75&amp;wid=400&amp;hei=400"
        />
        <Component8 />
        <Component10 head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Component10 reverse={true} head='한 차원 높은 성능' contents={['프리미엄 기능과 원하는 방식으로 커스터마이징', '할 수 있는 기능으로 Mac 생산성을 한 차원 높여주세요.']} />
        <Footer />
    </>


export default MarketPage;
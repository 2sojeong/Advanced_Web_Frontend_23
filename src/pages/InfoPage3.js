import Header from '../components/header';
import Footer from '../components/footer';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component3 from '../components/component3';
import Component6 from '../components/component6';
import Component7 from '../components/component7';
import Component10 from '../components/component10';
import bannerImg from "../img/info_3_1.jpg";
import Img3_2 from "../img/info_3_2.jpg";
import Img3_3 from "../img/info_3_3.jpg";
import Img3_4 from "../img/info_3_4.jpg";
import Img3_5 from "../img/info_3_5.jpg";
import Img3_6 from "../img/info_3_6.jpg";
import Img3_7 from "../img/info_3_7.jpg";
import Img3_8 from "../img/info_3_8.jpg";
import Img3_9 from "../img/info_3_9.jpg";
import Img3_10 from "../img/info_3_10.jpg";
import Img3_11 from "../img/info_3_11.jpg";
import Img3_12 from "../img/info_3_12.jpg";

const com6Data = { imgheader: 'Electronic Medical Record', imgurl: Img3_11, textheader: 'Store and Manage Patient Medical Records', textcontent: ['This enables health professionals to understand  ', 'patients\' health and improve communication', 'with them.', '', '*EMR - Electronic Medical Record'], imgheader2: 'Telemedic', imgurl2: Img3_12, textheader2: 'Telemedicine between Patients and Professionals', textcontent2: ['Telemedics allows patients to receive medical care at home,', 'and healthcare professionals can treat patients', 'without any distance and time constraints between regions.'], moreurl: 'https://www.telemedic.com/' }


const InfoPage3 = () => {
    return <>
        <Header />
        <Component1 title1='HEALTH CARE' contents={['Health care is a term that refers to all services provided ', 'to individuals or communities in order to maintain and improve their health.']} />
        <Component2 head='HEALTH CARE' contents={[' Your Healthy Choice', 'Healthcare makes a better future']} url="https://www.mdpi.com/journal/healthcare" imgurl={bannerImg} />

        <Component7 title='HEALTH CARE Includes Services' content='Promote and Maintain the Physical, Mental, and Emotional Well-Being of Individuals and Populations.'
            bar1='Prevention' bar2='Diagnosis' bar3='Treatment' bar4='Rehabilitation'
            link1='#section2'
            link2="https://www.microsoft.com/ko-kr/microsoft-teams/free"
            link3="https://www.microsoft.com/ko-kr/microsoft-teams/teams-for-work"
            link4="https://www.microsoft.com/ko-kr/microsoft-teams/education"
            img1={Img3_2}
            img2={Img3_3}
            img3={Img3_4}
            img4={Img3_5}
        />
        <div style={{ margin: '700px' }} />
        <Component10 head='Prevention' img={Img3_6} contents={['Preventive health care services help an individual maintain a healthy life. ', 'This includes vaccinations, healthy eating habits, ', 'regular exercise, and regular health checkups.']} />
        <Component10 reverse={true} img={Img3_7} head='Diagnosis' contents={['Diagnostic services help identify a disease or condition and are usually performed by medical professionals such as doctors, nurses, or dentists. X-rays, blood tests, ultrasound, and other diagnostic techniques are used.']} />
        <Component10 head='Treatment' img={Img3_8} contents={['Treatment services are provided to treat diseases or conditions, including medication, surgery, radiation, ', 'and other medical procedures.']} />
        <Component10 reverse={true} img={Img3_9} head='Rehabilitation' contents={['Rehabilitation services help you recover in the hospital. ', 'This includes physical therapy, occupational therapy,', ' and speech therapy.']} />
        <div style={{ margin: '200px' }} />
        <Component3 head='Trends' subtitle='Healthcare & IT Technology' content1='The development of information  ' content2='technology has led to the ' content3='incorporation of IT technology ' content4='in the medical field.' content5='The adoption of information technology in healthcare has also led to the development of new healthcare services and solutions that have helped improve the quality of healthcare.' img={Img3_10} />
        <Component6 data={com6Data} />
        <div style={{ margin: '200px' }} />
        < Footer />
    </>
}

export default InfoPage3
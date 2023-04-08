import Header from '../components/header';
import Footer from '../components/footer';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component7 from '../components/component7';
import Component10 from '../components/component10';
const InfoPage3 = () => {
    return <>
        <Header />
        <Component1 title1='HEALTH CARE' contents={['Health care is a term that refers to all services provided ', 'to individuals or communities in order to maintain and improve their health.']} />
        <Component2 head='BIO' contents={[' Biotechnology', 'Innovation Organization']} url="https://www.bio.org/" imgurl="https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg" />

        <Component7 title='HEALTH CARE Includes Services' content='Promote and Maintain the Physical, Mental, and Emotional Well-Being of Individuals and Populations.'
            bar1='prevention' bar2='diagnosis' bar3='treatment' bar4='rehabilitation'
            link1='#section2'
            link2="https://www.microsoft.com/ko-kr/microsoft-teams/free"
            link3="https://www.microsoft.com/ko-kr/microsoft-teams/teams-for-work"
            link4="https://www.microsoft.com/ko-kr/microsoft-teams/education"
            img1="https://cdn.pixabay.com/photo/2020/04/02/19/15/hand-washing-4996426_1280.jpg"
            img2='https://cdn.pixabay.com/photo/2019/04/03/03/06/treatment-4099432_1280.jpg'
            img3="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg"
            img4="https://cdn.pixabay.com/photo/2015/01/10/17/32/physiotherapy-595529_1280.jpg"
        />
        <div style={{ margin: '700px' }} />
        <Component10 head='prevention' img='https://cdn.pixabay.com/photo/2020/03/17/12/44/washing-hands-4940239_1280.jpg' contents={['Vaccination, healthy eating habits, ', 'regular exercise, and regular health checkups']} />
        <Component10 reverse={true} img='https://cdn.pixabay.com/photo/2017/06/30/15/32/investigation-2458540_1280.jpg' head='diagnosis' contents={['Helps identify disease or condition', 'X-ray, blood test, ultrasound and diagnostic techniques']} />
        <Component10 head='treatment' img='https://cdn.pixabay.com/photo/2018/05/30/22/54/tablets-3442768_1280.jpg' contents={['To provide for the treatment of a disease or condition', 'Medication, surgery, radiotherapy, and medical procedures']} />
        <Component10 reverse={true} img='https://cdn.pixabay.com/photo/2020/04/30/12/44/therapy-center-5112724_1280.jpg' head='rehabilitation' contents={['Helps recover in the hospital', 'Physical therapy, occupational therapy, and speech therapy']} />

        < Footer />
    </>
}

export default InfoPage3
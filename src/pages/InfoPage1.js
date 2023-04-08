import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component4 from '../components/component4';
import Component7 from '../components/component7';
import Component8 from '../components/component8';
import Header from '../components/header';
import Footer from '../components/footer';

import medicine from "../img/medicine.png";
import family from "../img/family.jpg"

const Com8data1 = [{ imgurl: "https://static.chemistwarehouse.com.au/ams/media/pi/53953/3DF_800.jpg", tag: ['Sore throat', 'Anti-inflammatory', 'Cough drop'], name: 'Strepsils' }]
const Com8data2 = [{ imgurl: "https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dwb75365e3/products/L2711257/large/L2711257.JPG", tag: ['Pain relief', 'Fever reducer', 'Very safe'], name: 'Tylenol' }]
const Com8data3 = [{ imgurl: "https://www.clarityne.co.kr/sites/g/files/vrxlpx30401/files/2019-12/base-tablets-hero-front.png?imwidth=5000", tag: ['Allergy', 'Once a day', '24hour'], name: 'Claritin' }]
const Com8data4 = [{ imgurl: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/en_US/sliced-images/global/products/Bottle%20of%20Centrum%20Multigummies%20Adults%20vitamins.jpg?auto=format", tag: ['Multivitamins', 'Nutrients', 'Miscellaneous'], name: 'Centrum' }]
const Com8data5 = [{ imgurl: "https://i5.walmartimages.ca/images/Large/863/162/863162.jpg", tag: ['Cold', 'Flu', 'Daytime & Night'], name: 'DayQuil & NyQuil' }]
const Com8data6 = [{ imgurl: "https://images.ctfassets.net/bhbc4e60kzbl/1MWHvi08Om81M4RBWPa46H/56b7077a33366e759614fa8891df6d18/00056100003489_C1N1_CA-PR-US__1_.png", tag: ['Stomachache', 'Anti-diarrhea', 'Cherry-flavored'], name: 'Pepto bismol ' }]

const InfoPage1 = () => {
        return <>
                <Header />
                <Component1 title1='MEDICINE' contents={['SooYeol BIO is a bio company that strives to provide customers with the right and appropriate medicines,', 'making new developments to provide effective medicines.']} />
                <br /><br /><br />
                <Component4 color="#0082FF" head='Medicine company' title='Personal medicine' content1='Medicines are chemicals or compounds used to cure, halt, prevent disease or help in the diagnosis of illnesses.Our company offers reliable and proven medicines at reasonable prices, and exceptional technology across all areas helps our customers treat them.' content2='Learn more' link="https://kidshealth.org/en/teens/meds.html" image1={medicine} />
                <br /><br /><br /><br /><br />
                <Component7 title='Medicine categories' content='Since not all drugs are easily accessible to us, it is important to know the rules of each category of the drug.'
                        bar1='General' bar2='Pharmacy' bar3='Prescription' bar4='Controlled'
                        link1='https://pharmaceutical-journal.com/subject/general-sales-list-medicines'
                        link2="https://lloydspharmacy.com/blogs/prescriptions/pharmacy-medicines"
                        link3="https://en.wikipedia.org/wiki/Prescription_drug"
                        link4="https://en.wikipedia.org/wiki/Controlled_substance"
                        img1={'https://alphabodymedicalcenter.com/wp-content/uploads/2021/08/General-medicine.jpg'}
                        img2='https://www.felixhospital.com/sites/default/files/2022-11/best-pharmacy-services-hospital-in-noida.jpg'
                        img3={"https://www.knowleswellness.com/wp-content/uploads/2021/08/Filling-perscription.jpg"}
                        img4="https://media.sciencephoto.com/c0/47/19/78/c0471978-800px-wm.jpg"
                />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <Component8 bgColor="#9CF" title1='Major Medicines' title2='Experience a definite effect with the major medicine suggested by SoonYeol BIO' data={[Com8data1, Com8data2, Com8data3, Com8data4, Com8data5, Com8data6]} />
                <br /><br /><br />
                <Component2 head='Medicine' contents={['Small but big power', 'healing your body']} url="https://www.drugs.com/alpha/a.html" imgurl={family} />
                <Footer />
        </>
}

export default InfoPage1;
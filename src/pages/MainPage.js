import Header from '../components/header';
import Visual from '../components/visual';
import Footer from '../components/footer';
import Component13 from '../components/Component13';
import Visual2 from '../components/visual2';
const MainPage = () => {
    return <><Header /><Visual />
        <Component13 head='Biologics' content1={'SoonYeol BIO\'s information is available at reasonable cost to patients'} content2='Provides an opportunity to receive high-quality biopharmaceutical treatment' button='Learn more' url="/info1" img="https://cellhomeblob.blob.core.windows.net/bns/191713570956-c6c1b49b-a1e9-43c1-9a95-34a6db491d93.jpg" />
        <Visual2 /><Footer /></>
}

export default MainPage;
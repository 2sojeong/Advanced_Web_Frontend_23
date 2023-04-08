import Header from '../components/header';
import Footer from '../components/footer';
import Component1 from '../components/component1';
import Component2 from '../components/component2';
import Component5 from '../components/component5';
import Component10 from '../components/component10';
import Component4 from '../components/component4';
import original from '../img/original.jpg'

const InfoPage2 = () => {
        return <>
                <Header />
                <Component1 title1='Bio technology' contents={['Biotechnology harnesses cellular and biomolecular processes to develop', 'technologies and products that help improve our lives and the health of our planet.']} />
                <Component2 reverse={true} black={true} head='BIO' contents={[' Biotechnology', 'Innovation Organization']} url="https://www.bio.org/" imgurl="https://www.hccs.edu/media/houston-community-college/district/images/0712021_Medical-Biotechnology_ATC_Large.jpg" />
                <Component5 paddingRight='150px' head='What is Biotechnology?' content1='Biotechnology is technology based on biology.' content2='Using Biology to develop new products, methods and organisms' content3='intended to improve human health and society.' content4='Modern biotechnology provides' content5='breakthrough products and technologies.' img='https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/05/Biotechnology-Salaries.jpg' />
                <br />
                <Component10 head='Heal the World' contents={["harnessing nature's own toolbox and using our own", 'genetic makeup to heal and guide lines of research by', '\n', "-Reducing rates of infectious disease", "-Saving millions of children's lives", "-Creating more precise tools for disease detection"]} img="https://www.rutronik.com/fileadmin/_processed_neu/2/1/csm_Biotechnological_Manipulation_1_Future_Markets_Biotechnology_Rutronik_b3807d4e3f.jpg" />
                <Component10 reverse={true} head='Feul the World' marginRight='180px' contents={['uses biological processes such as fermentation and harnesses biocatalysts', 'such as enzymes, yeast, and other microbes to become', "microscopic manufacturing plants by", '\n', "-Streamlining the steps in chemical manufacturing processes", "-Reducing use of and reliance on petrochemicals"]} img="https://www.ukri.org/wp-content/uploads/2021/04/BBSRC-080421-GettyImages-169999232-735x492.jpg" />
                <Component10 head='Feed the World' contents={["improves crop insect resistance, enhances", 'crop herbicide tolerance and facilitates the use of more', ' environmentally sustainable farming practices by', '\n', "-Generating higher crop yields with fewer inputs", "-Lowering volumes of agricultural chemicals"]} img="https://media.istockphoto.com/id/543212762/photo/tractor-cultivating-field-at-spring.jpg?s=612x612&w=0&k=20&c=uJDy7MECNZeHDKfUrLNeQuT7A1IqQe89lmLREhjIJYU=" />
                <div style={{ margin: "150px auto" }}></div>
                <Component4 color='#22a140' head='Biotech company' title='BioNTech SE' content1='We aspire to translate science into survival by developing new immunotherapies. We are committed to improving the health of people worldwide with our fundamental research and our work in the area of development of immunotherapies utilizing the full potential of the immune system to fight cancer, infectious diseases and other serious diseases.' content2='Learn more' link="https://www.biontech.com/int/en/home.html" image1={original} />
                <div style={{ margin: "100px auto" }}></div>
                < Footer />
        </>
}

export default InfoPage2;
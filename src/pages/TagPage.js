import Header from '../components/header';
import Component11 from '../components/component11';
import Component12 from '../components/component12';
import Footer from '../components/footer';
const postData = [{ gourl: '', imgurl: 'https://kakaoenterprise.com/wp-content/uploads/2022/12/씨앤테크-442x250.png', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
{ gourl: '', imgurl: '~~', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
]
const TagPage = () => {

    return <>
        <Header />
        <Component11 content1='전체' content2='News' content3='BREAD STORY' content4='BREAD VIDEO' content5='광고' link1='https://www.paris.co.kr/bread-now/?cat=전체' link2='https://www.paris.co.kr/bread-now/?cat=breadcook' link3="https://www.paris.co.kr/bread-now/?cat=breadstory" link4='https://www.paris.co.kr/bread-now/?cat=breadvideo' link5='https://www.paris.co.kr/bread-now/?cat=advertisement' />
        <Component12 data={postData} />
        <Footer />
    </>
}

export { TagPage, postData }; 
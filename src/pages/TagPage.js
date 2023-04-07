import Header from '../components/header';
import Component11 from '../components/component11';
import Component12 from '../components/component12';
import Footer from '../components/footer';
import Component8 from '../components/component8';
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

const Com8data1 = [{ imgurl: "https://ottogi.okitchen.co.kr/pds/upfile/2021-05-29_147251679[22].jpg", tag: ['요린이', '봄', '111'], name: '봄 된장1' }]
const Com8data2 = [{ imgurl: "https://ottogi.okitchen.co.kr/pds/upfile/2021-05-29_147251679[22].jpg", tag: ['요린이', '봄', '222'], name: '봄 된장2' }]
const Com8data3 = [{ imgurl: "https://ottogi.okitchen.co.kr/pds/upfile/2021-05-29_147251679[22].jpg", tag: ['요린이', '봄', '333'], name: '봄 된장3' }]
const Com8data4 = [{ imgurl: "https://ottogi.okitchen.co.kr/pds/upfile/2021-05-29_147251679[22].jpg", tag: ['요린이', '봄', '444'], name: '봄 된장4' }]
const Com8data5 = [{ imgurl: "https://ottogi.okitchen.co.kr/pds/upfile/2021-05-29_147251679[22].jpg", tag: ['요린이', '봄', '555'], name: '봄 된장5' }]
const Com8data6 = [{ imgurl: "https://ottogi.okitchen.co.kr/pds/upfile/2021-05-29_147251679[22].jpg", tag: ['요린이', '봄', '666'], name: '봄 된장6' }]


const TagPage = () => {

        return <>
                <Header />
                <Component11 content1='전체' content2='News' content3='BREAD STORY' content4='BREAD VIDEO' content5='광고' link1='https://www.paris.co.kr/bread-now/?cat=전체' link2='https://www.paris.co.kr/bread-now/?cat=breadcook' link3="https://www.paris.co.kr/bread-now/?cat=breadstory" link4='https://www.paris.co.kr/bread-now/?cat=breadvideo' link5='https://www.paris.co.kr/bread-now/?cat=advertisement' />
                <Component12 data={postData} />
                <Component8 title1='추천레시피' title2='오뚜기가 ~~ 뭐시기' data={[Com8data1, Com8data2, Com8data3, Com8data4, Com8data5, Com8data6]} />
                <Footer />
        </>
}

export { TagPage, postData, Com8data1, Com8data2, Com8data3, Com8data4, Com8data5, Com8data6 }; 
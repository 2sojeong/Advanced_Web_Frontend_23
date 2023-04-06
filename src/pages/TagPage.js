import Header from '../components/header';
import Component11 from '../components/component11';
import Component12 from '../components/component12';
import Footer from '../components/footer';
const TagPage = () => {

    const data = [{ gourl: '', imgurl: 'https://kakaoenterprise.com/wp-content/uploads/2022/12/씨앤테크-442x250.png', tag: ['News', 'bio',], title: '안녕하세요 ~~~' },
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
    return <>
        <Header />
        <Component11 />
        <Component12 data={data} />
        <Footer />
    </>
}

export default TagPage; 
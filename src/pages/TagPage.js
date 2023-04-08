import Header from '../components/header';
import Component11 from '../components/component11';
import Component12 from '../components/component12';
import Footer from '../components/footer';
import Component8 from '../components/component8';
import Component1 from '../components/component1';
const postData = [{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=6415', imgurl: 'https://www.biotimes.co.kr/news/photo/202108/6415_6332_4528.jpg', tag: ['Policy'], title: '2025년까지 백신 5대 강국으로 만들기 위해 2.2조 투입된다' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=5103', imgurl: 'https://www.biotimes.co.kr/news/photo/202101/5103_4744_595.jpg', tag: ['Policy','Medical'], title: 'AI 기반 신약개발 특허 신청·획득 쉬워진다' },
{ gourl: 'https://www.yakup.com/news/index.html?mode=view&cat=11&nid=280359', imgurl: 'https://www.yakup.com/data/editor/news/202304/an9fKN7fu2hyKjZLF7yGlKCZw.jpg', tag: ['Medical','Issues',], title: '신약개발 R&D, 10년간 ‘인프라‧신약‧감염증’에 4조원 투자' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152409', imgurl: 'https://pds.medicaltimes.com/Thumnail/20230303/1677844909.jpg', tag: ['Medical','Policy'], title: '4월부터 당뇨약 병용처방 열린다…7개 요법 급여 적용' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10168', imgurl: 'https://www.biotimes.co.kr/news/photo/202303/10168_12511_1828.jpg', tag: ['Issues',], title: '[바이오 인수대전③] 글로벌 M&A, 국내 기업들에도 ‘기회’…주목되는 바이오 스타트업은?' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10167', imgurl: 'https://www.biotimes.co.kr/news/photo/202303/10167_12509_5859.jpg', tag: ['Issues',], title: '[바이오 인수대전②] 글로벌 빅파마, M&A 확산…올해 새 먹거리 탐색 ‘활발’' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10165', imgurl: 'https://www.biotimes.co.kr/news/photo/202303/10165_12507_5512.jpg', tag: ['Issues',], title: '[바이오 인수대전①] 빅파마, M&A ‘빅딜’... 화이자는 왜 시젠을 선택했나' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10256', imgurl: 'https://www.biotimes.co.kr/news/photo/202303/10256_12627_5345.jpg', tag: ['Fourm'], title: '‘한국-덴마크 병원 네트워크’ 출범..."양국 주요 병원들의 의료서비스 질 높일 것"' },
{ gourl: 'https://www.viva100.com/main/view.php?key=20230406010001754', imgurl: 'https://www.viva100.com/mnt/images/file/2023y/04m/06d/2023040601000415000017541.jpg', tag: ['Medical','Issues'], title: '“신약 개발도 AI가”…‘디지털 전환’ 서두는 제약사들' },
{ gourl: 'http://www.hitnews.co.kr/news/articleView.html?idxno=44584', imgurl: 'http://cdn.hitnews.co.kr/news/photo/202304/44584_57032_264.png', tag: ['Issues','Policy'], title: '日 제네릭 80%의 명과 암, 제네릭 권하던 정책 재정비' },
{ gourl: 'https://www.newsway.co.kr/news/view?ud=2023040514272897308', imgurl: 'https://nimage.newsway.co.kr/photo/2022/04/19/20220419000121_0700.png', tag: ['Medical'], title: 'K제약바이오, 국내 넘어 글로벌 임상 가속화' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=9896', imgurl: 'https://www.biotimes.co.kr/news/photo/202302/9896_12144_1012.jpg', tag: ['Issues',], title: '오가노이드, 동물실험 대체 방법으로 ‘주목’…국내 주요 기업은?' },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=9919', imgurl: 'https://www.biotimes.co.kr/news/photo/202303/9919_12173_2433.jpg', tag: ['Fourm','Issues'], title: 'AI신약개발전문위원회 출범, AI 통한 디지털 전환과 협업 생태계 가속화 약속' },
{ gourl: 'https://newsis.com/view/?id=NISX20230330_0002248089&cID=10434&pID=13200', imgurl: 'https://image.newsis.com/2023/03/30/NISI20230330_0001230617_web.jpg?rnd=20230330180039', tag: ['Issues','Medical'], title:"'글로벌 제약사 뭉치돈' 몰리는 아일랜드…이유는 '이것'" },
{ gourl: 'https://n.news.naver.com/mnews/article/648/0000015012?sid=103', imgurl: 'https://imgnews.pstatic.net/image/648/2023/03/28/0000015012_001_20230328160501603.jpg?type=w647', tag: ['Issues','Medical'], title: '게임이 독이라고? 지금은 약입니다' },
{ gourl: 'https://moneys.mt.co.kr/news/mwView.php?no=2023032710502072911', imgurl: 'https://menu.mt.co.kr/moneyweek/thumb/2023/03/27/06/2023032710502072911_1.jpg', tag: ['Fourm',], title: "'벨기에 포럼 참석' 식약처, 디지털헬스케어 국제 협력 강화"},
{ gourl: 'http://www.hitnews.co.kr/news/articleView.html?idxno=44443', imgurl: 'http://cdn.hitnews.co.kr/news/photo/202303/44443_56780_5223.jpg', tag: ['Policy','Fourm'], title:"올해 식약처 바이오 정책은 '맞춤형 규제'와 '안전망 구축'" },
{ gourl: 'http://www.bosa.co.kr/news/articleView.html?idxno=2193946', imgurl: 'http://cdn.bosa.co.kr/news/photo/202303/2193946_226109_596.png', tag: ['Policy'], title: '방역정책 전면 ‘자율·권고’ 따른 단계별 의료체계 변화는?' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152743', imgurl: 'https://pds.medicaltimes.com/NewsPhoto/20230323/1679542505.jpg', tag: ['Policy',], title: "'강남언니' 플랫폼, 진료비 광고 현실화? 복지위 문턱 넘었다" },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152718', imgurl: 'https://pds.medicaltimes.com/NewsPhoto/20230322/1679448527.jpg', tag: ['Fourm',], title: '2023 메디컬코리아 개막…코로나 이후 3년만에 대면행사' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152687', imgurl: 'https://pds.medicaltimes.com/NewsPhoto/20230321/1679369225.jpg', tag: ['Policy',], title: '수술실 CCTV 세부안 나왔다…촬영거부 사유 6개' },
{ gourl: 'https://www.medipana.com/article/view.php?news_idx=310405&sch_cate=D', imgurl: 'https://www.medipana.com/upload/editor/20230406112419_09765.jpg', tag: ['Medical','Policy',], title: "동물용의약품 생산 규제완화에 제약업계 '새 가능성' 열리나" },
{ gourl: 'https://www.biotimes.co.kr/news/articleView.html?idxno=10163', imgurl: 'https://www.biotimes.co.kr/news/photo/202303/10163_12498_1859.png', tag: ['Fourm'], title: '산업교육연구소, ‘디지털 바이오 정책지원과 혁신 기술 동향 및 개발 성공사례’ 세미나 개최' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152334', imgurl: 'https://pds.medicaltimes.com/NewsPhoto/20230228/1677554756.jpg', tag: ['Medical',], title: '복지부 "5년안에 블록버스터급 신약 2개 개발하겠다"' },
{ gourl: 'https://www.medicaltimes.com/Main/News/NewsView.html?ID=1152875', imgurl: 'https://pds.medicaltimes.com/NewsPhoto/20230331/1680233318.jpg', tag: ['Policy'], title: '심평원, 업무효율성 강화 문서자동인식 시스템 도입' },
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
                <br/>
                <Component1 title1='Bio News' contents={['Provides the latest bio-related news.','Learn about policies, forums and events, constraints, and the latest issues.']}/>
                <br/>
                <Component11 content1='전체' content2='POLICY' content3='FOURM' content4='ISSUES' content5='MEDICAL' link1='https://www.paris.co.kr/bread-now/?cat=전체' link2='https://www.paris.co.kr/bread-now/?cat=breadcook' link3="https://www.paris.co.kr/bread-now/?cat=breadstory" link4='https://www.paris.co.kr/bread-now/?cat=breadvideo' link5='https://www.paris.co.kr/bread-now/?cat=advertisement' />
                <Component12 data={postData} />
                <Component8 title1='추천레시피' title2='오뚜기가 ~~ 뭐시기' data={[Com8data1, Com8data2, Com8data3, Com8data4, Com8data5, Com8data6]} />
                <Footer />
        </>
}

export { TagPage, postData, Com8data1, Com8data2, Com8data3, Com8data4, Com8data5, Com8data6 }; 
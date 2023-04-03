import common from "./common";
const Visual = () => {
    return <div style={{ height: '100vh' }}>
        <div style={{ background: "url(http://www.corepharm.com/img/visual01.jpg) no-repeat center center / cover", width: '100%', height: '100%', position: 'absolute', top: '0    ', left: '0' }} />
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '1390px', padding: '0 20px', boxSizing: 'border-box', position: 'relative', margin: '0 auto' }}>
            <div style={{ color: '#fff', fontSize: '65px', fontWeight: '500', letterSpacing: '0.1pt', lineHeight: '120%', paddingBottom: '24px' }}>Think different for<br />a wider perspective.</div>
            <div style={{ color: '#fff', fontSize: '17px', fontWeight: '400', letterSpacing: '-0.3pt', lineHeight: '190%', wordBreak: 'keep-all' }}>
                코아팜바이오는 더 나은 치료효과를 위해 환자 친화적 제형 개발에 매진하고 있습니다.
            </div>
        </div>
    </div>
}

export default Visual
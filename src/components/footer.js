import bannerImg from "../img/227_5.jpg";

const Footer = () => {
    const infostyle = { color: '#888', fontSize: '14px', fontWeight: '400', letterSpacing: '-0.3pt', lineHeight: '180%', margin: '0', marginRight: '14px', wordBreak: 'keep-all' }
    return <><div style={{ maxWidth: '1390px', width: '100%', height: '1px', background: '#ddd', margin: '0 auto', padding: '0 20px' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '60px 20px 80px 116px', maxWidth: '1390px', width: '100%', boxSizing: 'border-box', position: 'relative', margin: '0 auto' }}>
            <div>
                <h1 style={{ width: '154px', height: '59px', marginBottom: '70px', padding: 0, }}><img src={bannerImg} style={{ width: '100%' }} /></h1>
                <p style={{ ...infostyle, display: 'inline-block' }}>(주)코아팜바이오</p>
                <p style={{ ...infostyle }}>경기도 성남시 수정구 복정로 103</p>
                <p style={{ ...infostyle }}>충청북도 청주시 흥덕구 오송읍 오송생명14로 5(정중리 684)</p>
            </div>
            <div style={{ writingMode: 'vertical-rl', whiteSpace: 'nowrap', opacity: '0.5', color: '#777', fontSize: '12px', fontWeight: '400', letterSpacing: '0.3pt', lineHeight: '180%', textTransform: 'uppercase', position: 'absolute', top: '50%', left: '20px', transform: 'translateY(-50%) rotate(180deg)' }}>© COREPHARM BIO. All rights reserved.</div>
        </div ></>
}

export default Footer
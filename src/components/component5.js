import React from "react";
import bannerImg from "../img/227_5.jpg";
const Component5 = () => {
    return (
        <>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: '1190px', margin: '50px auto', position: 'relative'
            }}>

                <h2 style={{
                    margin: '0',
                    paddingRight: '160px',
                    fontSize: '35px',
                    fontWeight: '600',
                    lineHeight: '1.18'
                }}>Manifesto</h2>
                <div style={{ lineHeight: '28px' }} >
                    <b style={{ fontSize: '19px' }}>
                        우리는 꿈을 현실로 만드는 여정에 함께하는 동반자들이다.
                        <br />
                        우리는 사람들이 자신의 꿈을 실현하는 것을 도움으로써
                        <br />
                        더 나은 세상을 만드는데 기여한다.
                    </b>
                    <p style={{ fontSize: '16px', marginTop: '30px' }}>
                        기술과 서비스,
                        <br />
                        그리고 혁신적인 아이디어로 우리 모두의 꿈을 현실로 만듭니다.
                    </p>
                </div>
            </div>
            <img src={bannerImg} style={{ margin: '60px auto', display: 'block', width: "900px", borderRadius: '18px' }}></img>

        </>
    );
}

export default Component5;
import React from "react";

const Component2 = () => {
    return (
        <>
            <div style={{ maxWidth: '100%', width: '100%', position: 'relative', margin: '100px auto', border: '0', justifyContent: 'center' }} class="Home_career-banner">
                <figure style={{ isolation: 'isolate', display: 'block', padding: '0px', margin: '0px' }} class="Home_career-banner__thum">
                    <picture style={{ width: '100%', textAlign: 'center', wordBreak: 'keep-all', display: 'block', margin: '0', padding: '0' }}>

                        <source media="(min-width: 1025px)" srcset="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/th-build-your-knowledge-pc-res2.png?$ORIGIN_PNG$" />

                        <source media="(min-width: 768px) and (max-width: 1024px)" srcset="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/th-build-your-knowledge-tab-res.png?$ORIGIN_PNG$" />


                        <source media="(min-width: 0px) and (max-width: 767px)" srcset="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/Home_Careers_banner_MO.png?$ORIGIN_PNG$" />



                        <img style={{ height: '400px', width: '100%', maxHeight: '570px', maxWidth: '100%', objectFit: 'cover', verticalAlign: 'top' }} loading="lazy" src="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/th-build-your-knowledge-pc-res2.png?$ORIGIN_PNG$" width="1440" height="380" alt="" data-pc-src="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/th-build-your-knowledge-pc-res2.png?$ORIGIN_PNG$" data-pc-width="1440" data-pc-height="380" data-tablet-src="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/th-build-your-knowledge-tab-res.png?$ORIGIN_PNG$" data-tablet-width="1023" data-tablet-height="300" data-mobile-src="https://image.semiconductor.samsung.com/image/samsung/p6/semiconductor/home/Home_Careers_banner_MO.png?$ORIGIN_PNG$" data-mobile-width="767" data-mobile-height="240" />

                    </picture>
                </figure>
                <div style={{ maxWidth: '1100px', width: '100%', position: 'absolute', padding: '0', top: 'calc(50% - 110px)', left: 'calc(50% - 700px)', color: '#ffffff' }} class="Home_career-banner__text">
                    <div style={{ fontSize: '30px', fontWeight: '700', marginBottom: '10px' }} class="Home_career-banner__title">채용</div>
                    <div style={{ fontSize: '40px', fontWeight: '700' }} class="Home_career-banner__description highContrastTarget">
                        함께 지식을 쌓고<br />
                        성장합니다.
                    </div>

                    <div class="Home_career-banner__item-btn-wrap">
                        <a style={{ padding: '0 20px', marginTop: '20px', height: '40px', display: 'inline-flex', lineHeight: '40px', fontWeight: '800', textDecoration: 'none', borderRadius: '20px', fontSize: '14px', backgroundColor: '#ffffff', color: '#000000' }} href="/kr/careers/" class="Home_career-banner__item-btn dark-bg btn-large highContrastTarget" data-an-tr="body contents" data-an-ca="link click" data-an-ac="더 알아보기" data-an-la="career banner">더 알아보기</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Component2;
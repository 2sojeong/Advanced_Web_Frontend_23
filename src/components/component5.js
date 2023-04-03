import React from "react";
import './component5.css';

const a = {
    margin: 0,
    padding: 0,
    border: 0,
    fontWeight: "inherit",
    fontStyle: "inherit",
    verticalAlign: "baseline",
    boxSizing: 'border - box'
}

const Component5 = () => {
    return (
        <>
            <div class="article-body" style={{ ...a }}>
                <div class="about-intro" style={{ ...a }}>
                    <div class="wrap-narrow" style={{ ...a }}>
                        <div class="about-message" style={{ ...a }}>
                            <h2 lang="en" class="about-message__title" style={{ ...a }}>Manifesto</h2>
                        </div>
                        <div class="about-message__content" style={{ ...a }}>
                            <b>
                                우리는 꿈을 현실로 만드는 여정에 함께하는 동반자들이다. <br />
                                우리는 사람들이 자신의 꿈을 실현하는 것을 도움으로써 <br />
                                더 나은 세상을 만드는데 기여한다.
                            </b>
                            <p>
                                기술과 서비스, <br />
                                그리고 혁신적인 아이디어로 우리 모두의 꿈을 현실로 만듭니다.
                            </p>
                        </div>
                    </div>
                    <div class="wrap-kakao" style={{ ...a }}>
                        <div class="about-intro__movie" style={{ ...a }}>
                            <div class="ke-embed-video ke-embed-video--youtube" style={{ ...a }}>
                                <div class="ke-embed-video__inner" style={{ ...a }}>
                                    <iframe style={{ ...a }} id="about-intro__yt" width="1244" height="699" src="https://www.youtube.com/embed/krdRA79NNRc?version=3&amp;loop=1&amp;autoplay=0&amp;rel=0&amp;showsearch=0&amp;showinfo=0&amp;enablejsapi=1" allow="autoplay" allowfullscreen="" title="혁신을 쉽게. 카카오엔터프라이즈"></iframe>

                                    <div style={{ ...a }} class="ke-embed-video__poster">
                                        <span class="ke-embed-video__bg" data-unveil="https://kakaoenterprise.com/wp-content/themes/kakaoenterprise/images/sub/info/about-intro-poster.jpg?v1.1" style="background-image:url(https://kakaoenterprise.com/wp-content/themes/kakaoenterprise/images/sub/info/about-intro-poster.jpg?v1.1);"></span>
                                        <span style={{ ...a }} class="ke-embed-video__overlay"><i class="ke-embed-video__overlay-btn"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Component5;
import React from "react";
import styles from './component3.css';

const Component3 = () => {
    return (
        <>
            <div id="container" style={{
                fontFamily: "'Noto Sans KR', 'Noto Sans', 'Malgun Gothic', 'Sunny Gothic', arial, sans-serif",
                boxSizing: 'border-box'
            }}>
                <section>
                    <div class="container">
                        <section class="section-text">
                            <div class="title-wrap content-title-wrap">
                                <h1 class="title-h1" >커피이야기</h1>
                            </div>
                        </section>
                    </div>
                    <div class="container">
                        <div class="ui-menu-img-text">
                            <div class="slogun-wrap">
                                <dl>
                                    <dt class="font-mark" >TWOSOME COFFEE STORY</dt>
                                    <dd>
                                        내 취향이 담긴 커피,
                                        <br class="is-mobile-show" />
                                        투썸플레이스에는
                                        <br class="is-mobile-hide" />
                                        내 취향을
                                        <br class="is-mobile-show" />
                                        담아 섬세하게 만든
                                        <br />
                                        나만의 커피가 있습니다.
                                    </dd>
                                </dl>
                                <p>
                                    투썸플레이스 큐그레이더(Q-Grader)는 좋은 산지의 신선한 원두만을 선별해 각각 다른 개성의 세가지 블렌드를 제공합니다. 원두 타입별 최적의 밸런스를 맞춘 로스팅 포인트, 최상의 에스프레소 추출 기술이 더해져 투썸플레이스만의 커피가 완성됩니다.
                                </p>
                            </div>
                            <div class="img-area">
                                <img src="https://www.twosome.co.kr/resources/images/content/img_p_coffeestory.jpg" alt="커피 사진"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Component3;
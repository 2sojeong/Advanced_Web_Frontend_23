import React from "react";
import './component3.css'

const a = { boxSizing: 'border-box' }
const b = {
    margin: 0,
    padding: 0
}

const Component3 = () => {
    return (
        <>
            <div id="container" style={{
                marginTop: "72px",
                ...a
            }}>
                <section>
                    <div class="container">
                        <section style={{
                            ...a,
                            marginBottom: "64px"
                        }}>
                            <div style={{
                                ...a,
                                marginBottom: "16px",
                            }}>
                                <h1 class="title-h1">커피이야기</h1>
                            </div>
                        </section>
                    </div>
                    <div class="container">
                        <div class="ui-menu-img-text">
                            <div style={{
                                ...a,
                                flexBasis: "48%",
                                flexGrow: "1",
                                flexShrink: "1",
                                paddingRight: "10vw",
                                wordBreak: "keep - all",
                                wordWrap: "break-word"
                            }}>
                                <dl style={{ ...a, ...b }}>
                                    <dt style={{
                                        ...a,
                                        ...b, fontSize: "56px",
                                        fontWeight: "800",
                                        color: "#000"
                                    }}>TWOSOME COFFEE STORY</dt>
                                    <dd style={{
                                        ...a, ...b, fontSize: "32px",
                                        fontWeight: "700",
                                        color: "#000", marginTop: "32px"
                                    }}>
                                        내 취향이 담긴 커피,
                                        <br />
                                        투썸플레이스에는
                                        <br />
                                        내 취향을 담아 섬세하게 만든
                                        <br />
                                        나만의 커피가 있습니다.
                                    </dd>
                                </dl>
                                <p style={{
                                    ...a, ...b, color: "#333",
                                    marginTop: "64px", paddingRight: "32px"
                                }}>
                                    투썸플레이스 큐그레이더(Q-Grader)는 좋은 산지의 신선한 원두만을 선별해 각각 다른 개성의 세가지 블렌드를 제공합니다. 원두 타입별 최적의 밸런스를 맞춘 로스팅 포인트, 최상의 에스프레소 추출 기술이 더해져 투썸플레이스만의 커피가 완성됩니다.
                                </p>
                            </div>
                            <div style={{
                                ...a, flexBasis: "40%",
                                flexGrow: 0, flexShrink: 1
                            }} >
                                <img style={{
                                    ...a,
                                    height: "auto",
                                    maxWidth: "100%",
                                    verticalAlign: "middle"
                                }} src="https://www.twosome.co.kr/resources/images/content/img_p_coffeestory.jpg" alt="커피 사진"></img>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    );
}

export default Component3;
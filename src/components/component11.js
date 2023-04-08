import React from "react";

const Component11 = (props) => {
    return (
        <>
            <div class="filters" style={{ boxSizing: "border-box", marginTop: "20px", boxShadow: "0 1px 1px 0 rgba(0,0,0, .1)", background: "#fff" }}>
                <div class="scroll-wrapper scroll-area scrollbar-macosx" style={{ position: "relative" }}>
                    <div class="scroll-area scrollbar-macosx scroll-content" data-offset="414.7857360839844" style={{ height: "auto", marginBottom: "0px", marginRight: "0px", maxHeight: "56px" }}>
                        <div class="container" style={{ textAlign: "center", boxSizing: "border-box", maxWidth: "1420px", padding: "0px 25px", position: "relative", margin: "0 auto", verticalAlign: "baseline" }}>
                            <ul style={{ listStyle: "none", padding: 0, whiteSpace: "nowrap", margin: 0, boxSizing: "borderBox", justifyContent: "center", display: "flex" }}>
                                <li class="active">
                                    <a href={props.link1} data-slug="전체" style={{ fontSize: "20px", padding: "18px 16px", display: "blocK", fontWeight: "500", color: "#023586", position: "relative", transition: "color .3s ease-out", boxShadow: "none", textDecoration: "none", boxSizing: "border-box" }}>{props.content1}</a>
                                </li>
                                <li class="">
                                    <a href={props.link2} data-term_id="361" data-slug="breadcook" style={{ fontSize: "20px", padding: "18px 16px", display: "blocK", fontWeight: "500", color: "#888", position: "relative", transition: "color .3s ease-out", boxShadow: "none", textDecoration: "none", boxSizing: "border-box", textTransform: 'uppercase' }}>{props.content2}</a>
                                </li>
                                <li class="">
                                    <a href={props.link3} data-term_id="362" data-slug="breadstory" style={{ fontSize: "20px", padding: "18px 16px", display: "blocK", fontWeight: "500", color: "#888", position: "relative", transition: "color .3s ease-out", boxShadow: "none", textDecoration: "none", boxSizing: "border-box", textTransform: 'uppercase' }}>{props.content3}</a>
                                </li>
                                <li class="">
                                    <a href={props.link4} data-term_id="8" data-slug="breadvideo" style={{ fontSize: "20px", padding: "18px 16px", display: "blocK", fontWeight: "500", color: "#888", position: "relative", transition: "color .3s ease-out", boxShadow: "none", textDecoration: "none", boxSizing: "border-box", textTransform: 'uppercase' }}>{props.content4}</a>
                                </li>
                                <li class="" >
                                    <a href={props.link5} data-term_id="10" data-slug="advertisement" style={{ fontSize: "20px", padding: "18px 16px", display: "blocK", fontWeight: "500", color: "#888", position: "relative", transition: "color .3s ease-out", boxShadow: "none", textDecoration: "none", boxSizing: "border-box", textTransform: 'uppercase' }}>{props.content5}</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="scroll-element scroll-x" style={{}}><div class="scroll-element_outer"><div class="scroll-element_size">
                    </div>
                        <div class="scroll-element_track"></div><div class="scroll-bar" style={{ width: "96px" }}>
                        </div>
                    </div>
                    </div>
                    <div class="scroll-element scroll-y" style={{}}>
                        <div class="scroll-element_outer">
                            <div class="scroll-element_size">
                            </div>
                            <div class="scroll-element_track">
                            </div>

                        </div>
                    </div>
                </div>
            </div >

        </>
    );
}

export default Component11;

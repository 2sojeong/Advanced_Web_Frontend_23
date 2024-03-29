import React from "react";

const Component1 = (props) => {

    const maginbottom = props.marginbottom ? props.marginbottom : '150px'
    return (
        <>

            <div style={{ marginTop: '30px', marginBottom: maginbottom }}>
                <h2 style={{
                    fontSize: "42px", letterSpacing: "-2.5px", display: "flex", alignItems: "center",
                    justifyContent: 'center', padding: "20px", textTransform: 'uppercase',
                }}>{props.title1}</h2>
                <p style={{
                    display: "flex", justifyContent: 'center',
                    fontSize: "20px", lineHeight: "32px", letterSpacing: "-0.2px", textAlign: "center",
                }}>
                    {props.contents.map((content) => <>{content}<br /></>)}
                </p>
            </div>

        </>
    );
}

export default Component1;
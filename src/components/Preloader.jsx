const Preloader = () => {
    return (
        <div id="ht-preloader" style={{display: "none"}}>
            <div className="loader clear-loader">
                <div className="loader-box"/>
                <div className="loader-box"/>
                <div className="loader-box"/>
                <div className="loader-box"/>
                <div className="loader-wrap-text">
                    <div className="text">
                        <span>S</span>
                        <span>O</span>
                        <span>F</span>
                        <span>T</span>
                        <span>I</span>
                        <span>N</span>
                        <span>O</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
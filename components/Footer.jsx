import { FooterData } from "../data/data"

function Footer() {
    return (
        <>
            <div className="wrapper">
                <div className="footer absolute bottom-0">
                    <footer className="footer footer-center p-4 text-base-content">
                        <div>
                            <p>{FooterData.text}</p>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Footer
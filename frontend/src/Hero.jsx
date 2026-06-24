
import logo from './assets/logo.jpg';
function Hero(){
    return (
        <>
            <section className="hero">
                 <img className="hero-image" src={logo} alt="AI Resume Builder" />
                    <div className="hero-content">
                   
                    <h1 className="hero-title">Build Your Resume with AI</h1>
                    <p className="hero-description">Create a professional resume in minutes using our AI-powered resume builder.</p>
                    <button className="hero-btn">Get Started</button>
                </div>
            </section>
        </>
    );
}

export default Hero
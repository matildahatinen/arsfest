import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import RegForm from "../Components/RegForm";

const formOpenDate = new Date('31 January 2022 12:00');

const Anmalan = () => {
    const isFormOpen = () => {
        const currDate = new Date();
        return currDate > formOpenDate;
    }

    return (
    <>
    <div className="center-page">
        <Nav />
        <MobileNav />
        <div className="page-content">
            <div className="page-content-container"> 
                <div className="page-content-center">
                    {isFormOpen()?
                    <RegForm />
                    
                    :
                    <>
                        <h2 className="page-content-title">Deltagaranmälan</h2>
                        <p className="page-content-text">
                            Anmälan öppnar 31.1 kl 12 för inbjudna gäster och den öppna anmälan öppnar 7.2 kl 12. 
                            Ifall kvoten för inbjudna gäster fylls stänger anmälan och öppnar igen till den öppna anmälan.
                        </p>
                    </>
                    }
                </div>
            </div>
        </div>
        
    </div>
    </>
    )
}

export default Anmalan;
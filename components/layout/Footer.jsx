import Container from "../ui/Container";

function Footer() {
    return (
        <footer className="border-t border-slate-800 py-8">

            <Container>

                <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
                    
                    <p>
                        © 2026 Asterbun. All rights reserved. No use of AI!!!
                    </p>

                    <a
                        href="#home"
                        className="hover:text-white">
                        Back to top ↑
                    </a>

                </div>

            </Container>

        </footer>
    );
}

export default Footer;
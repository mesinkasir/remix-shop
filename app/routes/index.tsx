import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";
import Remix from '~/data/img/glow.svg';
import shop from '~/data/Home.json';
import Banner from '~/widget/Banner';
export default function Index() {
  const user = useOptionalUser();
  return (
  <div>
    <main className="container-fluid">
      <div className="row">
	   <Banner/>
              <div className="col-md-10 offset-md-1 p-3 p-md-5 text-center">
              <div className="p-3 p-md-5 rounded bg-dark text-white">
			  <img className="img-fluid rounded mb-3" alt={shop.title} width="50%" height="50%" src={Remix}/>
			  <h3><strong><a href="/" className="text-white">{shop.title}</a></strong></h3>
			  <h4>{shop.description}</h4>
                {user ? (
                  <Link
                    to="/inventoris"
                    className="btn btn-outline-light p-3">
                    Update Your Product Shop {user.email}
                  </Link>
                ) : (
                  <div className="bg-light rounded p-1 col-md-6 offset-md-3">
                   <code className="text-dark">{shop.clone}</code>
                  </div>
                )}
            </div>
            </div>
		<div className="col-md-6 p-3 p-md-5">
				<img className="img-fluid rounded" alt={shop.title} src={shop.cover1} width="100%" height="100%"/>
				</div>
				<div className="col-md-6 p-3 p-md-5">
				<h3><strong><a href="/">{shop.about}</a></strong></h3>
				<p>{shop.text}</p>
				<p>{shop.services}</p>
				<p><Link to={shop.link} className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-takeoff" viewBox="0 0 16 16">
				<path d="M9.752 6.193c.599.6 1.73.437 2.528-.362.798-.799.96-1.932.362-2.531-.599-.6-1.73-.438-2.528.361-.798.8-.96 1.933-.362 2.532Z"/>
				<path d="M15.811 3.312c-.363 1.534-1.334 3.626-3.64 6.218l-.24 2.408a2.56 2.56 0 0 1-.732 1.526L8.817 15.85a.51.51 0 0 1-.867-.434l.27-1.899c.04-.28-.013-.593-.131-.956a9.42 9.42 0 0 0-.249-.657l-.082-.202c-.815-.197-1.578-.662-2.191-1.277-.614-.615-1.079-1.379-1.275-2.195l-.203-.083a9.556 9.556 0 0 0-.655-.248c-.363-.119-.675-.172-.955-.132l-1.896.27A.51.51 0 0 1 .15 7.17l2.382-2.386c.41-.41.947-.67 1.524-.734h.006l2.4-.238C9.005 1.55 11.087.582 12.623.208c.89-.217 1.59-.232 2.08-.188.244.023.435.06.57.093.067.017.12.033.16.045.184.06.279.13.351.295l.029.073a3.475 3.475 0 0 1 .157.721c.055.485.051 1.178-.159 2.065Zm-4.828 7.475.04-.04-.107 1.081a1.536 1.536 0 0 1-.44.913l-1.298 1.3.054-.38c.072-.506-.034-.993-.172-1.418a8.548 8.548 0 0 0-.164-.45c.738-.065 1.462-.38 2.087-1.006ZM5.205 5c-.625.626-.94 1.351-1.004 2.09a8.497 8.497 0 0 0-.45-.164c-.424-.138-.91-.244-1.416-.172l-.38.054 1.3-1.3c.245-.246.566-.401.91-.44l1.08-.107-.04.039Zm9.406-3.961c-.38-.034-.967-.027-1.746.163-1.558.38-3.917 1.496-6.937 4.521-.62.62-.799 1.34-.687 2.051.107.676.483 1.362 1.048 1.928.564.565 1.25.941 1.924 1.049.71.112 1.429-.067 2.048-.688 3.079-3.083 4.192-5.444 4.556-6.987.183-.771.18-1.345.138-1.713a2.835 2.835 0 0 0-.045-.283 3.078 3.078 0 0 0-.3-.041Z"/>
				<path d="M7.009 12.139a7.632 7.632 0 0 1-1.804-1.352A7.568 7.568 0 0 1 3.794 8.86c-1.102.992-1.965 5.054-1.839 5.18.125.126 3.936-.896 5.054-1.902Z"/>
				</svg> {shop.btn}</Link> or <a href="https://www.fiverr.com/creativitas/" className="btn btn-outline-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
</svg> Hire Me</a></p>
				</div>
				<div className="col-md-6 p-3 p-md-5">
				<h3><strong><a href="/">{shop.intro}</a></strong></h3>
				<p>{shop.text2}</p>
				<p>{shop.prisma}<br/> <code>{shop.cli}</code></p>
				<p><a href="https://github.com/mesinkasir/remix-shop" className="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
				<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
				</svg> Github</a></p>
				</div>
				<div className="col-md-6 p-3 p-md-5">
				<img className="img-fluid rounded" alt={shop.title} src={shop.cover2} width="100%" height="100%"/>
				</div>
	   </div>
    </main>
	</div>
  );
}

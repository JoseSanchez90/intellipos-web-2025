
import CardHome from "./components/card-home";
import SystemAloha from "./components/system-aloha";
import Clients from "./components/clients";
import Banner from "./components/banner";
import Ready from "./components/ready";

export default function Home() {

  return (
    <>
    {/* Menu Principal */}
    <Banner />

    {/* Porque elegirnos */}
    <CardHome />

    {/* Sistema Aloha */}
    <SystemAloha />

    {/* Nuestros Clientes */}
    <Clients />

    {/* Ultimo banner */}
    <Ready />
    </>

  );
}

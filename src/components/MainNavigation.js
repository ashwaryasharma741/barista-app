import { Navbar } from "./Navbar";

export const MainNavigation = ({children}) => {
  const links = [
    {
      path: '/prices',
      content: 'Price List'
    },
    {
      path: '/orders',
      content: 'Orders'
    },
  ];
  return (
    <>
      <Navbar navLinks={links}/>
      <main className="min-h-screen px-8 bg-stone-300">{children}</main>
    </>
  );
};
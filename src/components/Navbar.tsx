import pncLogoCircle  from '../assets/PNC-Logo-Circle.webp';

const navlist = [
  {
    id: '#home',
    text: 'Home',
    url: '#'
  },
  {
    id: '#events',
    text: 'Events',
    url: '#'
  },
  {
    id: '#tournaments',
    text: 'Tournaments',
    url: '#'
  },
  {
    id: '#about-us',
    text: 'About Us',
    url: '#'
  },
]

const Navbar = () => {
  const listItems = navlist.map(nav => 
    <div className='tracking-[6%] text-[10pt] uppercase font-semibold'>
      <a href={nav.url}>
        {nav.text}
      </a>
    </div>
  )

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="navbar lg:px-10 lg:py-3 bg-pnc-red w-full">
          <div className="mx-2 grow-1">
            <a href="/">
              <img className="h-11 w-auto object-contain" src={pncLogoCircle} alt="pnc-logo-circle" />
            </a>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost text-pnc-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current"> 
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path> 
              </svg>
            </label>
          </div>
          <div className="hidden flex-grow lg:block">
            <div className="text-pnc-white justify-around grid grid-cols-4">
              {listItems}
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-pnc-red min-h-full w-80 px-4 pt-6 text-pnc-white flex flex-col gap-y-6">
          {listItems}
        </div>
      </div>
    </div>
  )
}

export default Navbar;

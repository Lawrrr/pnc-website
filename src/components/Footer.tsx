import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

const socmedList = [
  {
    icon: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/playnconnect.cebu/'
  },
  {
    icon: 'fa-brands fa-discord',
    url: '#'
  },
  {
    icon: 'fa-brands fa-youtube',
    url: 'https://www.youtube.com/@PlayNConnectCebu'
  },
  {
    icon: 'fa-solid fa-envelope',
    url: '#'
  }
]

const Footer = () => {
  const listItems = socmedList.map(socmed => 
    <div className="btn w-12 h-12 md:w-10 md:h-10 rounded-full p-1 bg-pnc-white">
      <a 
        href={socmed.url} 
        target="_blank"
      >
        <FontAwesomeIcon 
          icon={socmed.icon}
          className="text-2xl md:text-lg"
          color="#004AAD" 
        />
      </a>
    </div>
  )

  return (
    <footer className="bg-pnc-blue flex justify-center text-center flex-col px-4 py-12 md:flex-row md:p-8 gap-12">
      <div className="flex flex-col gap-6 text-pnc-white md:w-1/2">
        <div>
          <p className="font-bold text-2xl tracking-wider">
            CONNECT WITH US!
          </p>
        </div>
        <div className="flex gap-4 md:gap-8 justify-around md:justify-center">
          {listItems}
        </div>
      </div>
      <div className="text-pnc-white md:w-1/2 flex items-center justify-center">
        <p className="font-semibold tracking-wider">
          © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer;

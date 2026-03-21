

const AboutUs = () => {
  return (
    <div className="bg-pnc-blue">
      <div className="bg-pnc-white p-8 about-container shadow-xl">
        <div className="text-pnc-red uppercase font-bold font-lilita-one text-3xl text-center tracking-wider my-6 md:text-4xl md:mb-14">
          About Us
        </div>
        <div className="flex flex-col md:flex-row md:gap-8 justify-center items-center">
          <div className="md:w-1/2">
            <div className="py-5 md:py-3 flex justify-center">
              <img 
                className="lg:h-98"
                src="/images/community.webp" 
                alt="community" 
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col gap-3 py-6">
              <div className="text-pnc-red text-xl md:text-2xl font-semibold">
                What other events does Play N’ Connect do? 
              </div>
              <div>
                <p>
                  Play N’ Connect holds smaller events for community meet-ups that range from local tournaments to art jams. Play N’ Connect also partners with events to exhibit games or hold tournaments in partnered events.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 py-4">
              <div className="text-pnc-red text-xl md:text-2xl font-semibold">
                What is NintenCom?
              </div>
              <div>
                <p>
                  NintenCom is a community group headed by Play N’ Connect. To get first-hand updates on any Play N’ Connect or other Nintendo-related events, you can be part of the community. You may also meet and mingle with the NintenCom community through our Discord!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

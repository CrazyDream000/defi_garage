import logo from './assets/img/logo.png';
import mobile_logo from './assets/img/mobile_logo.png';
import hero from './assets/img/hero.png'
import ethereum from './assets/img/ethereum.png';
import team1 from './assets/img/team1.png';
import explosion from './assets/img/explosion.png';
import ecosystem from './assets/img/ecosystem.png';
import protocols from './assets/img/protocols.png';
import teamBack from './assets/img/teamBack.png';
import disconnected from './assets/img/disconnected.svg';
import pandora from './assets/img/pandora.png';
import standard from './assets/img/standard.png';
import perpetual from './assets/img/perpetual.png';
import './App.css';

function App() {
  return (
    <div className="bg-black font-main">
      <div className="mx-auto">
        {/* Navbar */}
        <div className='navbar-container w-full flex flex-row justify-between p-5 px-5 sm:px-7 lg:px-10'>
          <div className='logo'>
            <img className='h-24 block lg:hidden' src={mobile_logo}></img>
            <img className='hidden h-24 w-auto lg:block' src={logo}></img>
          </div>
          <div className='navbar-menu-container flex flex-row  items-center text-white text-lg'>
            <div className='navbar-menus flex space-x-6'>
              <a href="" className=''>About</a>
              <a href="" className=''>Products</a>              
              <a href="" className=''>Tokenomics</a>
              <a href="" className=''>Team</a>
              <a href="" className=''>Projects</a>
              <a href="" className=''>Contract</a>
            </div>
            <div className='ml-6'>
              <button id="connectWalletButton" type="button" className="gradient text-black rounded-full px-6 py-3 font-bold relative inline-flex items-center transition-all transform hover:scale-105">Connect MetaMask</button>
            </div>
          </div>
        </div>
        {/* Body */}
        <div className='body-container text-white'>
          <section className='welcome-page mx-auto max-w-7xl px-7 pb-28 pt-6 sm:pb-36 lg:flex lg:px-10 lg:py-24'>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-10">
              <h1 className="mt-12 text-5xl font-bold tracking-tight sm:text-7xl ubuntu">Welcome to <br/> DeFi Garage</h1> 
              <p className="mt-8 text-xl leading-9">We invite you to join us on this exciting journey as we explore the possibilities of DeFi. Let's haphazardly fuse some elements in the name of science, shall we?</p>
              <div className="flex max-w-xs flex-col mt-8">
                <div className="flex items-center space-x-2">
                  <dd className="text-4xl font-extrabold tracking-tight sm:text-6xl">n/a</dd> 
                  <img className="h-9 md:h-10" src={ethereum} alt="Token Icon"/>
                </div> 
                <dt className="text-base leading-7">Subatomic Particles Currently Under Observation (Assets under holding)</dt>
              </div>
              <div className="mt-6">
                <a href="/#mint" className="gradient text-black mt-12 rounded-full px-6 py-3 font-bold relative inline-flex items-center gap-x-2 transition-all transform hover:scale-105">Mint</a>
                <a href="https://docs.defigarage.dev/" target="_blank" className="gradient text-black mt-12 rounded-full px-6 py-3 font-bold relative inline-flex items-center gap-x-2 transition-all ml-3 transform hover:scale-105">Docs</a>
              </div>
            </div>
            <div className="flex justify-center mt-20 sm:mt-28 lg:mt-0 w-full">
              <img src={hero} alt="Crazy Scientist Going Even Crazier" className="max-w-3xl sm:max-w-5xl md:max-w-2xl w-full object-cover" data-xblocker="passed"/>
            </div>
          </section>

          <section>
            <div id="about" className="max-w-7xl mx-auto py-4 px-5 sm:px-7 lg:py-5 lg:px-10 lg:flex lg:items-center lg:justify-between">
              <div className="mt-10 mb-10 lg:mt-0 lg:mb-0 lg:w-1/2 lg:order-2 lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-10">
                <h2 className="text-4xl text-center font-extrabold tracking-tight yellow ubuntu sm:text-5xl">About Us</h2> 
                <p className="mt-6 max-w-2xl text-xl mx-auto">At DeFi Garage, we believe that decentralized finance has only scratched the surface of its potential. The industry has made significant strides in the past few years, but there is still so much to explore and experiment with. That's why we have come together, combining our skills and creativity, to build innovative products that push the boundaries of what is possible in DeFi.</p>
              </div> 
              <div className="lg:w-1/2 lg:order-1 lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-10">
                <img className="mx-auto w-full h-auto object-cover max-w-md lg:h-full" src={team1} alt="Small Team Pic" data-xblocker="passed"/>
              </div>
            </div>
          </section>

          <section>
            <div className="max-w-7xl mx-auto py-4 px-5 sm:px-7 lg:py-5 lg:px-10 lg:flex lg:items-center lg:justify-between">
              <div className="mt-10 mb-10 lg:mt-0 lg:mb-0 lg:w-1/2 lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-10">
                <h2 className="text-4xl font-extrabold tracking-tight yellow ubuntu sm:text-5xl text-center">Our Vision</h2>
                <p className="mt-6 max-w-2xl text-xl mx-auto">Our vision is to build and deploy solutions that offer users strategic and flexible management of their crypto wealth. The mission is to develop decentralised financial products and protocols that challenge traditional models, while prioritising security, sustainability, and value creation for users. These solutions will be delivered within a variety of innovative dApps and web3 games built upon risk minimised architecture.</p>
              </div> 
              <div className="lg:w-1/2 lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-10">
                <img className="mx-auto w-full h-auto object-cover max-w-md lg:h-full" src={explosion} alt="Mushroom Cloud Explosion" data-xblocker="passed"/>
              </div>
            </div>
          </section>

          <section>
            <div id="products" className="flex flex-col justify-center garage py-12 svelte-vnm42n">
              <div className="max-w-7xl mx-auto p-10 text-center">
                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl yellow ubuntu">Products</h2>
                <p className="mt-6 text-xl">We are not afraid to experiment with new protocols, explore novel incentive mechanisms, or test out unconventional DeFi products.</p>
              </div> 
              <div className="max-w-7xl mx-auto p-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">
                <div className="flex flex-col items-center text-center">
                  <img src={protocols} alt="DeFi Protocols" data-xblocker="passed"/>
                  <h3 className="text-xl font-extrabold tracking-tight yellow ubuntu">DeFi Protocols</h3> 
                  <p className="mt-3 text-xl">DeFi through a new lens. Challenger dApps, no development caps!</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <img src={ecosystem} alt="Decentralised Games" data-xblocker="passed"/>
                  <h3 className="text-xl font-extrabold tracking-tight yellow ubuntu">GameFi</h3>
                  <p className="mt-3 text-xl">On-chain web3 strategy based games.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div id="mint" className="flex flex-col justify-center pt-12">
              <div className="max-w-7xl mx-auto p-6 text-center">
                <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl ubuntu yellow">Mint DEFIGARAGE</p>
                <p className="mt-6 text-xl leading-8">Our architecture, purposefully designed to avoid boom-bust cycles and 'Ponzinomics', ensuring a sustainable growth pathway. Delve deeper and uncover the mind-blowing approach that set us apart in the industry.</p>
              </div>
            </div>           
            <div>
              <div className="max-w-[500px] space-y-6 py-6 lg:max-w-lg mx-auto">
                <div className="flex w-full px-2 sm:px-0"><div className="flex items-center justify-center">
                  <img className="h-6 md:h-8 rounded-full" src={mobile_logo} alt="DEFIGARAGE Icon"/> 
                  <div className="ml-2">
                    <p>Mint DEFIGARAGE</p> 
                    <p>Current Wallet Balance: n/a</p>
                  </div>
                </div> 
                <button className="ml-auto text-gray-400">
                  <svg className="h-5 blink svelte-i9ykdu" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                    <path d="M7.33268 14.6663C11.0146 14.6663 13.9993 11.6816 13.9993 7.99967C13.9993 4.31778 11.0146 1.33301 7.33268 1.33301C3.65078 1.33301 0.666016 4.31778 0.666016 7.99967C0.666016 11.6816 3.65078 14.6663 7.33268 14.6663Z" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.39258 5.9994C5.54931 5.55385 5.85868 5.17814 6.26588 4.93883C6.67308 4.69951 7.15184 4.61203 7.61736 4.69188C8.08288 4.77173 8.50512 5.01375 8.8093 5.37509C9.11347 5.73642 9.27995 6.19375 9.27924 6.66607C9.27924 7.9994 7.27924 8.66607 7.27924 8.66607" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M7.33203 11.333H7.3387" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </button>
              </div>
              <div className="flex space-x-2 px-2 sm:px-0">
                <div className="w-full border border-gray-600">
                  <div className="flex mx-3 my-2">
                    <img className="h-6 md:h-8" src={ethereum} alt="Token Icon"/>
                    <img className="h-3 md:h-4 my-auto ml-auto" src={disconnected} alt="Connection Status"/>
                  </div>
                  <div className="mx-3 my-2">
                    <p>From</p>
                    <p className="font-bold">Your Wallet</p>
                  </div>
                </div>
                <div className="my-auto">
                  <svg className="w-4 md:w-5" viewBox="0 0 16 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3 0.764648L14.5 3.67376M14.5 3.67376L11.3 6.58286M14.5 3.67376C14.5 3.67376 6.54857 3.67365 5.69992 3.67365C4.85128 3.67365 1 3.67376 1 3.67376" stroke="#EBFF00" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
                <div className="w-full border border-gray-600">
                  <div className="mx-3 my-2">
                    <img className="h-6 md:h-8 rounded-full" src={mobile_logo} alt="Token Icon"/>
                  </div>
                  <div className="mx-3 my-2">
                    <p>To</p>
                    <p className="font-bold">DeFi Garage</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-2 sm:px-0 border border-gray-600">
                <div className="w-full relative px-3 py-2">
                  <div className="flex space-x-2 items-center">
                    <img className="h-5 md:h-6" src={ethereum} alt="Token Icon"/>
                    <p>Ethereum</p>
                  </div>
                  <div className="flex">
                    <p>Wallet Balance: n/a</p> <button className="ml-auto uppercase yellow hover:underline">max</button>
                  </div>
                  <div className="absolute left-2/3 top-2 mr-3">
                    <input id="mintInput" type="text" placeholder="0" className="focus:outline-none bg-transparent font-bold text-xl w-full text-right"/>
                  </div>
                </div>
              </div>
              <div className="w-full px-2 sm:px-0 text-xl border border-[#EBFF00] hover:bg-[#EBFF00] hover:text-black">
                <button className="w-full py-4">Mint</button></div></div> <div className="mx-auto max-w-[500px] border border-gray-600">
              </div>
            </div>
            <div className="space-y-4 w-full mt-8">
              <button className="p-4 rounded-lg shadow-md w-full text-center">
                <div className="ubuntu text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-[#98ff00]">Early bird advantage <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">(click to expand)</span></div> 
              </button>
              <button className="p-4 rounded-lg shadow-md w-full text-center">
                <div className="ubuntu text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-[#98ff00]">90% backed, no lock-in period <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">(click to expand)</span></div> 
              </button>
              <button className="p-4 rounded-lg shadow-md w-full text-center">
                <div className="ubuntu text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-[#98ff00]">Ever-increasing redeemable token backing <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">(click to expand)</span></div> 
              </button>
              <button className="p-4 rounded-lg shadow-md w-full text-center">
                <div className="ubuntu text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-[#98ff00]">Uncapped token value <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">(click to expand)</span></div>
              </button>
              <button className="p-4 rounded-lg shadow-md w-full text-center">
                <div className="ubuntu text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-[#98ff00]">Risks averted by design <span className="text-base sm:text-base md:text-lg lg:text-lg xl:text-xl">(click to expand)</span></div>
              </button>
            </div>
          </section>

          <section>
            <div id="team" className="flex flex-col justify-center py-12">
              <div className="max-w-7xl mx-auto p-6 text-center">
                <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl ubuntu text-[#EBFF00]">Mad Squad</p>
                <p className="mt-2 text-lg tracking-tight sm:text-xl">(Our Team)</p>
                <p className="mt-6 text-xl leading-8">The DeFi Garage team comprises of some of the most innovative and creative minds in the industry. The team has a proven track record within the DeFi space. We have launched 3 dApps in just 7 months, including two versions of <a className="hover:underline text-[#EBFF00]" href="https://catinabox.finance/" target="_blank">Cat-in-a-Box</a>. Our team delivers front-end and back-end development, UI/UX design, marketing, and community building.</p>
                <div className="max-w-7xl mx-auto p-6 w-full flex justify-center mt-16 items-center">
                  <div className="w-full sm:w-3/4 lg:w-3/4 xl:w-3/4 p-6 relative">
                    <div className="ubuntu yellow text-2xl sm:text-3xl text-center sm:flex sm:flex-col sm:items-center lg:block">
                      <div className="mb-6 sm:mb-8 lg:mb-0 lg:absolute lg:bottom-full lg:left-[10%]">
                        <p className='text-[#EBFF00]'>Dr Derivative</p>
                        <p className="text-white text-lg inconsolata">(The Solidity Dev &amp; Brain)</p>
                      </div>
                      <div className="mb-6 sm:mb-8 lg:mb-0 lg:absolute lg:bottom-full lg:left-[37%]">
                        <p className='text-[#EBFF00]'>Snape</p>
                        <p className="text-white text-lg inconsolata">(The Visuals &amp; Video Expert)</p>
                      </div>
                      <div className="mb-6 sm:mb-8 lg:mb-0 lg:absolute lg:bottom-full lg:left-[70%]">
                        <p className='text-[#EBFF00]'>Loxley</p>
                        <p className="text-white text-lg inconsolata">(The Everything Else Dev)</p>
                      </div>
                      <img src={teamBack}/>
                      <div className="mb-6 sm:mb-8 lg:mb-0 lg:absolute lg:top-full lg:left-[24%]">
                        <p className='text-[#EBFF00]'>BroBroSeven</p>
                        <p className="text-white text-lg inconsolata">(The Marketing Guru)</p>
                      </div>
                      <div className="mb-6 sm:mb-8 lg:mb-0 lg:absolute lg:top-full lg:left-[56%]">
                        <p className='text-[#EBFF00]'>Pwnz</p> 
                        <p className="text-white text-lg inconsolata">(The Branding Expert)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden group w-full border-t-2 border-b-2 border-[#98ff00]">
            <a target="_blank" href="https://discord.gg/rWeEf6GJBj" className="w-full py-4 md:py-6 lg:py-8 relative z-10 hover:text-black gradient-border block text-center text-2xl svelte-zbx7ee">Join The Discord!</a>
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 group-hover:opacity-100 transition-opacity gradient"></div>
          </section>

          <section>
            <div id="projects" class="flex flex-col justify-center py-20">
              <div class="max-w-7xl mx-auto p-12 text-center">
                <h2 class="text-4xl text-center font-extrabold tracking-tight ubuntu sm:text-5xl text-[#EBFF00]">Upcoming Projects</h2> 
                <p class="mt-6 text-xl">Prepare yourself for the future of DeFi with our upcoming projects at DeFi Garage! Building on our history of successful and innovative contributions to the decentralised finance space, we're taking our work to new heights. Our upcoming projects are laser-focused on pioneering aspects of DeFi technology that haven't been thoroughly explored yet.</p>
              </div>
              <div class="grid grid-cols-1 items-center justify-items-center">
                <div class="caution-tape svelte-1d3hkna">caution</div>
                <div class="flex flex-col items-center text-center relative w-full bg-center bg-no-repeat bg-cover project1 p-10 svelte-1d3hkna">
                  <img class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 z-20" src={pandora} alt="Pandora Logo"/>
                  <p class="mt-6 max-w-2xl text-xl mx-auto z-10 relative">We are developing a player-versus-player (PvP) auction-based game. This strategic game will provide an engaging experience for users and reveal new possibilities to the web3 gaming industry.</p>
                  <p class="mt-6 max-w-2xl mx-auto z-10 relative yellow">Expected Q3 2023</p>
                </div>
                <div class="caution-tape svelte-1d3hkna">caution</div>
                <div class="flex flex-col items-center text-center relative w-full bg-center bg-no-repeat bg-cover project2 p-10 svelte-1d3hkna">
                  <img class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 z-20" src={standard} alt="Standard Logo"/>
                  <p class="mt-6 max-w-2xl text-xl mx-auto z-10 relative">Our team is working on creating a template for a new fiat system on-chain, backed by Ethereum validator rewards. This project aims to revolutionise the financial landscape by offering a decentralised alternative to traditional fiat currencies.</p>
                  <p class="mt-6 max-w-2xl mx-auto z-10 relative yellow">Expected Q4 2023</p>
                </div>
                <div class="caution-tape svelte-1d3hkna">caution</div>
                <div class="flex flex-col items-center text-center relative w-full bg-center bg-no-repeat bg-cover project3 p-10 svelte-1d3hkna">
                  <img class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 z-20" src={perpetual} alt="Perpetual Logo"/>
                  <p class="mt-6 max-w-2xl text-xl mx-auto z-10 relative">We are introducing a brand new approach to tackle fundraising challenges as described here in more detail which will be used for the DEFIGARAGE token. This token allows contributors to participate in our ecosystem while benefiting from the value generated by our projects.</p>
                  <p class="mt-6 max-w-2xl mx-auto z-10 relative yellow">Expected Q4 2023</p>
                </div>
                <div class="caution-tape svelte-1d3hkna">caution</div>
              </div>
            </div>
          </section>

          <section>
            <footer id="contact" class="bg-no-repeat bg-center bg-cover sm:bg-contain px-4 py-8 sm:px-16 sm:py-12 footer-container">
              <div class="max-w-7xl mx-auto relative">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-center z-50">
                  <a href="https://discord.gg/rWeEf6GJBj" target="_blank" class="mx-auto flex flex-col items-center">
                    <svg class="h-7 w-7 svelte-189oj3m" fill="currentColor" viewBox="0 -28.5 256 256">
                      <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"></path>
                    </svg> 
                    <h3 class="font-bold text-lg text-[#EBFF00]">Discord</h3>
                  </a>
                  <a href="https://twitter.com/DeFiGarageDev" target="_blank" class="mx-auto flex flex-col items-center">
                    <svg class="h-7 w-7 svelte-189oj3m" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                    <h3 class="font-bold text-lg text-[#EBFF00]">Twitter</h3>
                  </a>
                </div>
                <p class="text-center text-sm sm:text-lg">©2023 All rights reserved to the mad scientists over at <span class="yellow">DeFi Garage</span>. Please respect the development process. <span class="yellow font-semibold">EVERYTHING IS EXPERIMENTAL!</span></p>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;

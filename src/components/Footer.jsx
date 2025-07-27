import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className="bg-gray-100 py-10 px-4 md:px-20 text-sm">
        <><div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                  <h4 className="font-bold mb-2">Furniro.</h4>
                  <p>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
              </div>
              <div>
                  <h5 className="font-semibold mb-2">Links</h5>
                  <ul className="space-y-1">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Shop</a></li>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
              </div>
              <div>
                  <h5 className="font-semibold mb-2">Help</h5>
                  <ul className="space-y-1">
                      <li><a href="#">Payment Options</a></li>
                      <li><a href="#">Returns</a></li>
                      <li><a href="#">Privacy Policies</a></li>
                  </ul>
              </div>
              <div>
                  <h5 className="font-semibold mb-2">Newsletter</h5>
                  <input type="email" placeholder="Enter Your Email" className="border p-2 w-full mb-2" />
                  <button className="bg-yellow-600 text-white px-4 py-2 w-full">SUBSCRIBE</button>
              </div>
          </div><p className="text-center text-gray-500">2023 Furniro. All rights reserved</p></>
      </footer>
    </div>
  )
}

export default Footer

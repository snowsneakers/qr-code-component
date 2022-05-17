import qrCode from "./images/image-qr-code.png"

function App() {
  return (
    <>
      <div className="wrapper w-96 mx-auto p-5 rounded-xl">
        <img src= {qrCode} alt="" className="rounded-xl mb-5" />
        <div className="textContent p-2 text-center">
          <h1 className="font-bold mb-5 leading-tight">Improve your front-end skills by building projects</h1>
          <p className="mb-5 leading-tight">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    <div class="attribution">
      <span>Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.</span> 
      <span>Coded by <a href="https://github.com/snowsneakers">Patrick Snowden</a>.</span>
  </div>
    </>
  );
}

export default App;

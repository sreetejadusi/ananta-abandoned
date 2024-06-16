export default function LandingHero() {
  return (
    <div className="flex items-center justify-center h-screen pt-20">
      <div className="wrap">
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">Disc○ver the <br /> power ●f</span>
            </div>
          </div><div className="right">
            <div className="content">
              <span className="spanSlow">Disc●ver the<br />  power ●f</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanSlow">em○ti○n driven<br />  design</span>
            </div>
          </div><div className="right">
            <div className="content">
              <span className="spanSlow">em○ti●n driven <br /> design</span>
            </div>
          </div>
        </div>
        <div className="line">
          <div className="left">
            <div className="content">
              <span className="spanFast">with us.</span>
            </div>
          </div><div className="right">
            <div className="content">
              <span className="spanFast">with us.</span>
            </div>
          </div>
        </div>
        <p id="scrollmessage" className="text-white text-center duration-500">scroll to know more</p>
      </div>
    </div >
  );
}
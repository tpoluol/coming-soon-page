import bg22 from '/bg-pattern-desktop.svg';
import logo from '/logo.svg';
import hero from '/hero-mobile.jpg';
import arrow from '/icon-arrow.svg';
import error from '/icon-error.svg';
import { useState } from 'react';
function App() {
  const [email, setEmail] = useState(null);
  const [vaild, setVaild] = useState(1);
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  function invaildEmail() {
    if (emailRegex.test(email)) {
      setVaild(1);
    } else {
      setVaild(0);
    }
    console.log(vaild);
  }
  const borderVariants = {
    0: 'border-SoftRed',
    1: '',
  };

  return (
    <div className="flex flex-col font-josefinsans min-h-screen justify-center items-center bg-no-repeat bg-cover bg-[url('/bg-pattern-desktop.svg')]">
      <article className="flex flex-col gap-5 max-w-[300px] shadow-2xl">
        <img src={logo} alt="" className="w-[120px] m-3" />
        <img src={hero} alt="" />
        <div className="m-5">
          <div className="flex flex-col items-center text-3xl">
            <p className="text-DesaturatedRed font-light">W E ' R E</p>
            <p className="font-bold">C O M I N G</p>
            <p className="font-bold">S O O N</p>
          </div>
          <div className="text-center">
            <p className="text-DesaturatedRed text-sm mt-3">
              Hello fellow shoppers! We're currently building our new fashion
              store, Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </div>
          <input
            type="text"
            placeholder="  Email Address"
            className={`border-2 rounded-full outline-none ${borderVariants[vaild]}  w-full my-7 h-[40px] text-xs pl-4`}
            onChange={(e) => {
              setEmail(e.target.value);
              invaildEmail();
            }}
          />
          {!vaild && (
            <>
              <img
                src={error}
                alt=""
                className="absolute bottom-[185px] left-[230px]"
              />
              <p className="absolute text-DesaturatedRed text-xs bottom-[150px] left-[80px]">
                Please provide a valid email
              </p>
            </>
          )}
          <button className="w-[60px] h-[40px] hover:brightness-125 border-[1px] text-sm shadow-xl bg-gradient-to-br from-DesaturatedRed to-SoftRed relative rounded-full bottom-[67px] left-[200px]">
            <img src={arrow} alt="" className="relative left-6" />
          </button>
        </div>
      </article>
    </div>
  );
}

export default App;

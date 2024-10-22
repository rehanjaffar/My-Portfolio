export function ContactUs() {
    return (
        <section className="recommend items-center flex flex-col lg:ml-[30px] mt-5">

            <div className="w-[70%]">
                    <h1 className="text-[36px] font-semibold p-5">Leave Us Your Info</h1>
                
                <form action="" className="py-8 px-5 bg-white">
                    <label htmlFor="" className="text-xl">Your Full Name Required</label> <br />
                    <input type="text" required  className="bg-[gainsboro] h-10 w-full p-3 mb-5"/> <br />
                     <label htmlFor="" className="text-xl">Your Email Required</label> <br />
                    <input type="text" required  className="bg-[gainsboro] h-10 w-full p-3 mb-5"/> <br />
                     <label htmlFor="" className="text-xl">Subject</label> <br />
                    <input type="text" name="" id="" className="bg-[gainsboro] h-10 w-full p-3 mb-5" /> <br />
            <label htmlFor="" className="text-xl">Your Message</label> <br />
                   <textarea name="" id="" rows="8" className="bg-[gainsboro] w-full p-3 mb-5" />
                    <br />
                    <button className="bg-red-400 p-5 rounded-2xl text-white text-xl">Send Message</button>
                </form>
                <div className="mt-5">
                    <h1 className="bg-white text-center">2024 All Rights Reserved</h1>
                </div>
            </div>
            </section>
    )
}



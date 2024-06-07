export default function PlanningServices() {
    return (
        <>
            <div className="w-full my-12">
                <h1 className="text-black text-4xl font-semibold mb-12">
                    Planning services
                </h1>
                <div className="flex flex-wrap md:flex-nowrap gap-y-3">
                    <div className="w-full md:w-1/2">
                        <p className="text-justify px-3 opacity-90">
                            We can help you create inspiring and functional solutions for different areas of your home or business. Whether you're planning a new kitchen or creating a much-needed storage solution, our planning specialist can assist with your project, big or small. Schedule an online, or in-store planning appointment and our planning specialists will help you design your ideal space.
                        </p>
                        <ul className="flex gap-x-1 mt-3 px-3 flex-wrap">
                            <li>
                                <a href="#" className="underline opacity-90 hover:opacity-100">How it works</a>
                            </li>
                            <li className="opacity-50"> | </li>
                            <li>
                                <a href="#" className="underline opacity-90 hover:opacity-100">Schedule an appointment</a>
                            </li>
                            <li className="opacity-50"> | </li>
                            <li>
                                <a href="#" className="underline opacity-90 hover:opacity-100">DIY planning tools</a>
                            </li>
                        </ul>

                    </div>
                    <div className="w-full md:w-1/2 mt-3 md:mt-0">
                        <img
                            src="/images/services.jpg"
                            alt="Planning service example"
                            className="w-full h-[306px]"
                        />
                    </div>
                </div>
                <hr className="mt-20" />
            </div>
        </>
    );
}

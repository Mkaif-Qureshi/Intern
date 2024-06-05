
export default function PlanningGuide({ content }) {
    return (
        <div className="w-full md:w-1/2 h-screen">
            <h1 className="text-black text-2xl font-bold my-10">{content.PlanningGuide.title}</h1>

            <ol type='1' className="list-decimal pl-8 ">

                {
                    content.PlanningGuide.steps.map((step, index) => (
                        <li key={index} className="ml-4 my-2 opacity-70 text-[15px]">
                            {
                                step.split('*').map(
                                    (text, i) =>
                                        i % 2 === 0 ? <span key={i}>{text}</span> : <strong key={i}>{text}</strong>
                                )
                            }
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}
